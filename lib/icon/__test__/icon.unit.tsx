import * as renderer from "react-test-renderer";
import * as React from "react";
import {mount} from "enzyme";
import Icon from "../Icon";

describe("Icon", () => {
  it("can render", () => {
    const json = renderer.create(<Icon name={"react"}/>).toJSON();
    expect(json).toMatchSnapshot();
  });
  it("icon name is right", () => {
    const json = renderer.create(<Icon name={"react"}/>).toJSON();
    const iconName = (json as any).children[0].props.xlinkHref
    expect(iconName).toEqual("#react");
  });
  it("has onClick", () => {
    const fn = jest.fn();
    const component = mount(<Icon name="react" onClick={fn}/>);
    component.find("svg").simulate("click");
    expect(fn).toBeCalled();
  });
});
