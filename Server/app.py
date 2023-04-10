from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import pickle
from PyPDF2 import PdfReader
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import ElasticVectorSearch, Pinecone, Weaviate, FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain.llms import OpenAI
from langchain.chains.qa_with_sources import load_qa_with_sources_chain
from dotenv import load_dotenv
import glob

app = Flask(__name__)
CORS(app, origins=['http://localhost:3001'])
load_dotenv()

# pre-processing the PDF document


def textreader():
    raw_textn = ''

    # loop through all pdf files in current folder
    for filename in glob.glob('/Users/aadarsh/0pen/Pdf Open Ai/pdf-open-ai/Server/uploads/*.pdf'):
        pdfFileObj = open(filename, 'rb')  # open a single pdf file
        readern = PdfReader(pdfFileObj)  # create a pdf reader object
        for i, page in enumerate(readern.pages):
            text = page.extract_text()
            if text:
                raw_textn += text

    text_splitter = CharacterTextSplitter(
        separator="\n",
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len,
    )
    texts = text_splitter.split_text(raw_textn)

    embeddings = OpenAIEmbeddings()

    docsearch = FAISS.from_texts(texts, embeddings)
    with open("docsearch.pkl", "wb") as f:
        pickle.dump(docsearch, f)

# taking input value and text, loading into openai


def pdf(inputValue):
    with open("docsearch.pkl", "rb") as f:
        docsearch = pickle.load(f)
    docs = docsearch.similarity_search(inputValue)
    print(docs[0].page_content)

    chain = load_qa_chain(OpenAI(temperature=0.5), chain_type="stuff")
    result = chain.run(input_documents=docs, question=inputValue)

    return result

# Routing to webpage
# @app.route("/")
# def index():
#     return render_template("index.html")


# User query input function
@app.route("/api/chat", methods=["POST"])
def get_data():
    data = request.get_json()
    input_value = data['input']
    print(input_value)
    response = pdf(input_value)
    return jsonify({"response": response})

# upload pdf function
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'pdf'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    if file and allowed_file(file.filename):
        filename = file.filename
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        textreader()
        return 'PDF file uploaded successfully'
    else:
        return 'Invalid file type'


@app.route('/search', methods=['POST'])
def submit_value():
    value = request.json['searchText']
    print('Input value:', value)
    response = pdf(value)
    return jsonify({"input": value, "response": response})


if __name__ == "__main__":
    app.config['UPLOAD_FOLDER'] = 'uploads'
    app.run(debug=True, port=8000)
