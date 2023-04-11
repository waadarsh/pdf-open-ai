import { Menu, Icon } from "semantic-ui-react";

function Navbar() {
  return (
    <div>
      <Menu borderless inverted size="massive">
        <Menu.Item name="Nissan Chat GPT" />

        <Menu.Menu position="right">
          <Menu.Item>
            <Icon name="alarm" size="large"/>
          </Menu.Item>
          <Menu.Item>
            <Icon name="user circle" size="large" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default Navbar;
