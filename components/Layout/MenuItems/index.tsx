import { Menu } from "semantic-ui-react";
import Link from "next/link";

export const MenuItems = () => {
  return (
    <>
      <Menu.Item as="a" active>
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Link href="#infoSegment">
          <a>Info</a>
        </Link>
      </Menu.Item>
      <Menu.Item as="a">
        <Link href="#about">
          <a>About</a>
        </Link>
      </Menu.Item>
      <Menu.Item as="a">
        <Link href="#caseStudies">
          <a>Studies</a>
        </Link>
      </Menu.Item>
    </>
  );
};
