import {
  MapTo,
  Page,
  withComponentMappingContext,
} from "@adobe/aem-react-editable-components";
import { withRoute } from "../../routing/RouteHelper/RouteHelper";

import ReactGA from "react-ga";

class AppPage extends Page {
  componentDidMount() {
    let newTitle = this.props.title;
    document.title = newTitle;

    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  get containerProps() {
    let attrs = super.containerProps;
    attrs.className =
      (attrs.className || "") + " page " + (this.props.cssClassNames || "");
    return attrs;
  }
}

export default MapTo("cryptobike/components/page")(
  withComponentMappingContext(withRoute(AppPage))
);
