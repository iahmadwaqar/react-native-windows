/**
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 * @format
 * @flow
 */

'use strict';

import type {RNTesterModule, RNTesterModuleInfo} from '../types/RNTesterTypes';

import * as RNTesterListFbInternal from './RNTesterListFbInternal';
import ReactNativeFeatureFlags from 'react-native/Libraries/ReactNative/ReactNativeFeatureFlags';

const Components: Array<RNTesterModuleInfo> = [
  /*{
    key: 'DrawerLayoutAndroid',
    category: 'UI',
    module: require('../examples/DrawerLayoutAndroid/DrawerLayoutAndroidExample'),
    key: 'HTTPExample',
    module: require('../examples/HTTP/HTTPExample'),
  },*/
  {
    key: 'XHRExample',
    module: require('../examples/XHR/XHRExample'),
  },
  {
    key: 'ActivityIndicatorExample',
    category: 'UI',
    module: require('../examples/ActivityIndicator/ActivityIndicatorExample'),
  },
  {
    key: 'ButtonExample',
    category: 'UI',
    module: require('../examples-win/Button/ButtonExample'),
  },
  {
    key: 'FlatListExampleIndex',
    module: require('../examples/FlatList/FlatListExampleIndex').default,
    category: 'ListView',
  },
  {
    key: 'ImageExample',
    category: 'Basic',
    module: require('../examples/Image/ImageExample'),
  },
  {
    key: 'Display:NoneExample',
    category: 'UI',
    module: require('../examples-win/DisplayNone/DisplayNoneExample'),
  },
  {
    key: 'FastTextExample',
    category: 'Basic',
    module: require('../examples-win/FastText/FastTextExample'),
  },
  {
    key: 'FlyoutExample',
    category: 'UI',
    module: require('../examples-win/Flyout/FlyoutExample'),
  },
  {
    key: 'GlyphExample',
    category: 'UI',
    module: require('../examples-win/Glyph/GlyphExample'),
  },
  {
    key: 'ModalExample',
    category: 'UI',
    module: require('../examples/Modal/ModalExample'),
  },
  {
    key: 'Drawing Island',
    module: require('../examples-win/NativeComponents/DrawingIsland'),
  },
  {
    key: 'Moving Light',
    module: require('../examples-win/NativeComponents/MovingLight'),
  },
  {
    key: 'Native Component',
    module: require('../examples-win/NativeComponents/NativeComponent'),
  },
  {
    key: 'Native Component Yoga',
    module: require('../examples-win/NativeComponents/NativeComponentYoga'),
  },
  {
    key: 'NewAppScreenExample',
    module: require('../examples/NewAppScreen/NewAppScreenExample'),
  },
  {
    key: 'PressableExample',
    category: 'UI',
    module: require('../examples/Pressable/PressableExample'),
  },
  {
    key: 'PopupExample',
    category: 'UI',
    module: require('../examples-win/Popup/PopupExample'),
  },
  {
    key: 'KeyboardExtensionExample',
    category: 'Basic',
    module: require('../examples-win/Keyboard/KeyboardExtensionExample'),
  },
  {
    key: 'ScrollViewExample',
    category: 'Basic',
    module: require('../examples/ScrollView/ScrollViewExample'),
  },
  {
    key: 'ScrollViewSimpleExample',
    category: 'Basic',
    module: require('../examples/ScrollView/ScrollViewSimpleExample'),
  },
  {
    key: 'ScrollViewAnimatedExample',
    category: 'Basic',
    module: require('../examples/ScrollView/ScrollViewAnimatedExample'),
  },
  {
    key: 'SectionListExample',
    category: 'ListView',
    module: require('../examples/SectionList/SectionListIndex'),
  },
  {
    key: 'SwipeableCardExample',
    category: 'UI',
    module: require('../examples/SwipeableCardExample/SwipeableCardExample'),
  },
  {
    key: 'SwitchExample',
    category: 'UI',
    module: require('../examples-win/Switch/SwitchExample'),
  },
  {
    key: 'TextExample',
    category: 'Basic',
    module: require('../examples/Text/TextExample'),
  },
  {
    key: 'TextInputExample',
    category: 'Basic',
    module: require('../examples/TextInput/TextInputExample'),
  },
  {
    key: 'TextInputs with key prop',
    module: require('../examples/TextInput/TextInputKeyProp'),
  },
  {
    key: 'TouchableExample',
    category: 'UI',
    module: require('../examples/Touchable/TouchableExample'),
  },
  {
    key: 'TransferProperties',
    category: 'Basic',
    module: require('../examples-win/TransferProperties/TransferPropertiesExample'),
  },
  {
    key: 'TransparentHitTestExample',
    module: require('../examples/TransparentHitTest/TransparentHitTestExample'),
  },
  {
    key: 'ViewExample',
    category: 'Basic',
    module: require('../examples/View/ViewExample').default,
  },
  //{
  //  key: 'NewArchitectureExample',
  //  category: 'UI',
  //  module: require('../examples/NewArchitecture/NewArchitectureExample'),
  //},
  {
    key: 'XAML',
    category: 'UI',
    module: require('../examples-win/XAML/XAMLExample'),
  },
  {
    key: 'FabricXaml',
    category: 'UI',
    module: require('../examples-win/XAML/FabricXamlExample'),
  },
  {
    key: 'LegacyControlStyleTest',
    module: require('../examples-win/LegacyTests/ControlStyleTestPage'),
  },
  {
    key: 'LegacyTextInputTest',
    module: require('../examples-win/LegacyTests/TextInputTestPage'),
  },
  {
    key: 'LegacyLoginTest',
    module: require('../examples-win/LegacyTests/LoginTestPage'),
  },
  {
    key: 'LegacyImageTest',
    module: require('../examples-win/LegacyTests/ImageTestPage'),
  },
  {
    key: 'LegacySelectableTextTest',
    module: require('../examples-win/LegacyTests/SelectableTextTestPage'),
  },
  {
    key: 'LegacyTextHitTestTest',
    module: require('../examples-win/LegacyTests/TextHitTestPage'),
  },
  {
    key: 'PerformanceComparisonExample',
    category: 'Basic',
    module: require('../examples/Performance/PerformanceComparisonExample'),
  },
  /*
  {
    key: 'OSSLibraryExample',
    module: require('../examples/OSSLibraryExample/OSSLibraryExample'),
  },
  */
  ...RNTesterListFbInternal.Components,
];

const APIs: Array<RNTesterModuleInfo> = ([
  {
    key: 'KeyboardFocusExample',
    category: 'Basic',
    module: require('../examples-win/Keyboard/KeyboardFocusExample'),
  },
  {
    key: 'AccessibilityExample',
    category: 'Basic',
    module: require('../examples/Accessibility/AccessibilityExample'),
  },
  {
    key: 'AccessibilityExampleWindows',
    category: 'Basic',
    module: require('../examples-win/Accessibility/AccessibilityExampleWindows'),
  },
  {
    key: 'AccessibilityInfo',
    category: 'Basic',
    module: require('../examples-win/Accessibility/AccessibilityInfoExample'),
  },
  {
    key: 'AlertExample',
    category: 'UI',
    module: require('../examples/Alert/AlertExample').default,
  },
  {
    key: 'AnimatedIndex',
    category: 'UI',
    module: require('../examples/Animated/AnimatedIndex').default,
  },
  {
    key: 'Animation - GratuitousAnimation',
    category: 'UI',
    module: require('../examples/AnimatedGratuitousApp/AnExApp'),
  },
  {
    key: 'AppearanceExample',
    category: 'UI',
    module: require('../examples/Appearance/AppearanceExample'),
  },
  {
    key: 'AppStateExample',
    category: 'Basic',
    module: require('../examples/AppState/AppStateExample'),
  },
  {
    key: 'ContentURLAndroid',
    category: 'Android',
    module: require('../examples/ContentURLAndroid/ContentURLAndroid'),
  },
  {
    key: 'URLExample',
    category: 'Basic',
    module: require('../examples/Urls/UrlExample'),
  },
  {
    key: 'BorderExample',
    category: 'UI',
    module: require('../examples/Border/BorderExample').default,
  },
  {
    key: 'CrashExample',
    category: 'Basic',
    module: require('../examples/Crash/CrashExample'),
  },
  {
    key: 'DevSettings',
    category: 'Basic',
    module: require('../examples/DevSettings/DevSettingsExample'),
  },
  {
    key: 'Dimensions',
    category: 'UI',
    module: require('../examples/Dimensions/DimensionsExample'),
  },
  {
    key: 'DisplayContentsExample',
    category: 'UI',
    module: require('../examples/DisplayContents/DisplayContentsExample')
      .default,
  },
  // Only show the link for the example if the API is available.
  // E2E Tests failing when this test is enabled
  // {
  //   key: 'InvalidPropsExample',
  //   module: require('../examples/InvalidProps/InvalidPropsExample'),
  // },
  {
    key: 'Keyboard',
    category: 'Basic',
    module: require('../examples/Keyboard/KeyboardExample').default,
  },
  {
    key: 'KeyboardExample',
    module: require('../examples-win/Keyboard/KeyboardExample'),
  },
  {
    key: 'LayoutEventsExample',
    category: 'UI',
    module: require('../examples/Layout/LayoutEventsExample'),
  },
  {
    key: 'LinkingExample',
    category: 'Basic',
    module: require('../examples/Linking/LinkingExample'),
  },
  // {
  //   key: 'LayoutAnimationExample',
  //   category: 'UI',
  //   module: require('../examples/Layout/LayoutAnimationExample'),
  // },
  {
    key: 'LayoutExample',
    category: 'UI',
    module: require('../examples/Layout/LayoutExample'),
  },
  {
    key: 'MouseExample',
    category: 'Basic',
    module: require('../examples-win/Mouse/MouseExample'),
  },
  {
    key: 'MouseClickExample',
    category: 'Basic',
    module: require('../examples-win/Mouse/MouseClickExample'),
  },
  {
    key: 'NativeAnimationsExample',
    category: 'UI',
    module: require('../examples/NativeAnimation/NativeAnimationsExample'),
  },
  {
    key: 'CompositionBugsExample',
    category: 'UI',
    module: require('../examples-win/NativeAnimation/CompositionBugsExample'),
  },
  {
    key: 'PanResponderExample',
    category: 'Basic',
    module: require('../examples/PanResponder/PanResponderExample'),
  },
  {
    key: 'PixelRatio',
    category: 'UI',
    module: require('../examples/PixelRatio/PixelRatioExample'),
  },
  /*
  {
    key: 'PermissionsExampleAndroid',
    category: 'Android',
    module: require('../examples/PermissionsAndroid/PermissionsExample'),
  },
  */
  {
    key: 'PlatformColorExample',
    category: 'UI',
    module: require('../examples/PlatformColor/PlatformColorExample'),
  },
  {
    key: 'PointerEventsExample',
    category: 'Basic',
    module: require('../examples/PointerEvents/PointerEventsExample'),
  },
  {
    key: 'RTLExample',
    category: 'Basic',
    module: require('../examples/RTL/RTLExample'),
  },
  {
    key: 'ShareExample',
    category: 'Basic',
    module: require('../examples/Share/ShareExample'),
  },
  {
    key: 'TimerExample',
    category: 'UI',
    module: require('../examples/Timer/TimerExample'),
  },
  {
    key: 'TransformExample',
    category: 'UI',
    module: require('../examples/Transform/TransformExample'),
  },
  {
    key: 'FilterExample',
    category: 'UI',
    module: require('../examples/Filter/FilterExample'),
  },
  /*
  {
    key: 'LinearGradientExample',
    category: 'UI',
    module: require('../examples/LinearGradient/LinearGradientExample'),
  },
  {
    key: 'RadialGradientExample',
    category: 'UI',
    module: require('../examples/RadialGradient/RadialGradientExample'),
  },
  {
    key: 'MixBlendModeExample',
    category: 'UI',
    module: require('../examples/MixBlendMode/MixBlendModeExample'),
  },
  {
    key: 'VibrationExample',
    category: 'Basic',
    module: require('../examples/Vibration/VibrationExample'),
  },
  */
  {
    key: 'WebSocketExample',
    category: 'Basic',
    module: require('../examples/WebSocket/WebSocketExample'),
  },
  /* TODO: ? XHRExample requires CameraRoll access
  {
    key: 'XHRExample',
    category: 'Basic',
    module: require('../examples/XHR/XHRExample'),
  }, */
  {
    key: 'TurboModuleExample',
    category: 'Basic',
    module: require('../examples/TurboModule/TurboModuleExample'),
  },
  {
    key: 'LegacyModuleExample',
    module: require('../examples/TurboModule/LegacyModuleExample'),
  },
  {
    key: 'TurboCxxModuleExample',
    category: 'Basic',
    module: require('../examples/TurboModule/TurboCxxModuleExample'),
  },
  ...RNTesterListFbInternal.APIs,
]: Array<?RNTesterModuleInfo>).filter(Boolean);

if (ReactNativeFeatureFlags.shouldEmitW3CPointerEvents()) {
  APIs.push({
    key: 'W3C PointerEvents',
    category: 'Experimental',
    module: require('../examples/Experimental/W3CPointerEventsExample').default,
  });
}

const Playgrounds: Array<RNTesterModuleInfo> = [
  {
    key: 'PlaygroundExample',
    module: require('../examples/Playground/PlaygroundExample'),
  },
];

const Modules: {[key: string]: RNTesterModule} = {};

[...APIs, ...Components, ...Playgrounds].forEach(Example => {
  Modules[Example.key] = Example.module;
});

const RNTesterList = {
  APIs,
  Components,
  Modules,
};

module.exports = RNTesterList;
