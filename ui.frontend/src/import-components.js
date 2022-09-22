import withAsyncImport from './utils/withAsyncImport';

import './components/Page/Page';
import './components/Container/Container';
import './components/ExperienceFragment/ExperienceFragment';

import { MapTo } from '@adobe/aem-react-editable-components';

import { CarouselV1IsEmptyFn } from '@adobe/aem-core-components-react-spa/dist/isEmptyFunctions';
import { TitleV2IsEmptyFn } from '@adobe/aem-core-components-react-base/dist/isEmptyFunctions';

import {
  TabsV1,
  ContainerV1,
  AccordionV1,
  TabsV1IsEmptyFn,
  ContainerV1IsEmptyFn,
  AccordionV1IsEmptyFn,
} from '@adobe/aem-core-components-react-spa';

import {
  ListV2,
  ImageV2,
  ButtonV1,
  TeaserV1,
  DownloadV1,
  SeparatorV1,
  BreadCrumbV2,
  NavigationV1,
  ListV2IsEmptyFn,
  ImageV2IsEmptyFn,
  ButtonV1IsEmptyFn,
  TeaserV1IsEmptyFn,
  DownloadV1IsEmptyFn,
  LanguageNavigationV1,
  SeparatorV1IsEmptyFn,
  BreadCrumbV2IsEmptyFn,
} from '@adobe/aem-core-components-react-base';

const TextEditConfig = {
  emptyLabel: 'Text',

  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1;
  },
};

const LazyTextComponent = withAsyncImport(() =>
  import(`./components/Text/Text`),
);

const TitleV2 = withAsyncImport(() =>
  import(
    `@adobe/aem-core-components-react-base/dist/authoring/title/v2/TitleV2`
  ),
);
const CarouselV1 = withAsyncImport(() =>
  import(
    `@adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1`
  ),
);

MapTo('cryptobike/components/navigation')(NavigationV1);
MapTo('cryptobike/components/text')(LazyTextComponent, TextEditConfig);
MapTo('cryptobike/components/languagenavigation')(LanguageNavigationV1);
MapTo('cryptobike/components/list')(ListV2, { isEmpty: ListV2IsEmptyFn });
MapTo('cryptobike/components/tabs')(TabsV1, { isEmpty: TabsV1IsEmptyFn });
MapTo('cryptobike/components/image')(ImageV2, { isEmpty: ImageV2IsEmptyFn });
MapTo('cryptobike/components/title')(TitleV2, { isEmpty: TitleV2IsEmptyFn });
MapTo('cryptobike/components/button')(ButtonV1, { isEmpty: ButtonV1IsEmptyFn });
MapTo('cryptobike/components/teaser')(TeaserV1, { isEmpty: TeaserV1IsEmptyFn });
MapTo('cryptobike/components/download')(DownloadV1, {
  isEmpty: DownloadV1IsEmptyFn,
});
MapTo('cryptobike/components/carousel')(CarouselV1, {
  isEmpty: CarouselV1IsEmptyFn,
});
MapTo('cryptobike/components/separator')(SeparatorV1, {
  isEmpty: SeparatorV1IsEmptyFn,
});
MapTo('cryptobike/components/accordion')(AccordionV1, {
  isEmpty: AccordionV1IsEmptyFn,
});
MapTo('cryptobike/components/container')(ContainerV1, {
  isEmpty: ContainerV1IsEmptyFn,
});
MapTo('cryptobike/components/breadcrumb')(BreadCrumbV2, {
  isEmpty: BreadCrumbV2IsEmptyFn,
});
