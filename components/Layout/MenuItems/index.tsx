import { Menu } from "semantic-ui-react";
import Link from "next/link";

export const MenuItems = () => {
  return (
    <>
      <Link href="#top">
        <a>
          <Menu.Item active>Home</Menu.Item>
        </a>
      </Link>
      <Link href="#infoSegment">
        <a>
          <Menu.Item>Info</Menu.Item>
        </a>
      </Link>
      <Link href="#about">
        <a>
          <Menu.Item>About</Menu.Item>
        </a>
      </Link>
      <Link href="#caseStudies">
        <a>
          <Menu.Item>Studies</Menu.Item>
        </a>
      </Link>
    </>
  );
};
