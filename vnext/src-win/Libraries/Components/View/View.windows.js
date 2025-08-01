/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

import type {ViewProps} from './ViewPropTypes';

import TextAncestor from '../../Text/TextAncestor';
import ViewNativeComponent from './ViewNativeComponent';
import * as React from 'react';
import invariant from 'invariant'; // [Windows]
// [Windows
import type {KeyEvent} from '../../Types/CoreEventTypes';
// Windows]

export type Props = ViewProps;

// [Windows
// $FlowFixMe - children typing
const childrenWithImportantForAccessibility = children => {
  if (children == null) {
    return children;
  }
  const updatedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      // $FlowFixMe[incompatible-use]
      if (child.props.children) {
        // $FlowFixMe[incompatible-call]
        return React.cloneElement(child, {
          accessible: false,
          children: childrenWithImportantForAccessibility(child.props.children),
        });
      } else {
        // $FlowFixMe[incompatible-call]
        return React.cloneElement(child, {accessible: false});
      }
    }
    return child;
  });
  if (updatedChildren.length === 1) {
    return updatedChildren[0];
  } else {
    return updatedChildren;
  }
};
// Windows]

/**
 * The most fundamental component for building a UI, View is a container that
 * supports layout with flexbox, style, some touch handling, and accessibility
 * controls.
 *
 * @see https://reactnative.dev/docs/view
 */
const View: component(
  ref?: React.RefSetter<React.ElementRef<typeof ViewNativeComponent>>,
  ...props: ViewProps
) = React.forwardRef(
  (
    {
      accessibilityElementsHidden,
      accessibilityLabel,
      accessibilityLabelledBy,
      accessibilityLevel, // Windows
      accessibilityDescription, //Windows
      accessibilityLiveRegion,
      accessibilityPosInSet, // Windows
      accessibilitySetSize, // Windows
      accessibilityState,
      accessibilityValue,
      'aria-busy': ariaBusy,
      'aria-checked': ariaChecked,
      'aria-disabled': ariaDisabled,
      'aria-expanded': ariaExpanded,
      'aria-multiselectable': ariaMultiselectable, // Windows
      'aria-required': ariaRequired, // Windows
      'aria-description': ariaDescription, //Windows
      'aria-hidden': ariaHidden,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-level': ariaLevel,
      'aria-live': ariaLive,
      'aria-posinset': ariaPosinset, // Windows
      'aria-readonly': ariaReadOnly, // Windows
      'aria-selected': ariaSelected,
      'aria-setsize': ariaSetsize, // Windows
      'aria-valuemax': ariaValueMax,
      'aria-valuemin': ariaValueMin,
      'aria-valuenow': ariaValueNow,
      'aria-valuetext': ariaValueText,
      focusable,
      disabled,
      id,
      importantForAccessibility,
      nativeID,
      tabIndex,
      ...otherProps
    }: ViewProps,
    forwardedRef,
  ) => {
    const hasTextAncestor = React.useContext(TextAncestor);
    const _accessibilityLabelledBy =
      ariaLabelledBy?.split(/\s*,\s*/g) ?? accessibilityLabelledBy;

    const _accessibilityState =
      accessibilityState != null ||
      ariaBusy != null ||
      ariaChecked != null ||
      ariaDisabled != null ||
      ariaExpanded != null ||
      ariaSelected != null ||
      ariaReadOnly != null || // Windows
      ariaMultiselectable != null || // Windows
      ariaRequired != null // Windows
        ? {
            busy: ariaBusy ?? accessibilityState?.busy,
            checked: ariaChecked ?? accessibilityState?.checked,
            disabled: ariaDisabled ?? accessibilityState?.disabled,
            expanded: ariaExpanded ?? accessibilityState?.expanded,
            selected: ariaSelected ?? accessibilityState?.selected,
            readOnly: ariaReadOnly ?? accessibilityState?.readOnly, // Windows
            multiselectable:
              ariaMultiselectable ?? accessibilityState?.multiselectable, // Windows
            required: ariaRequired ?? accessibilityState?.required, // Windows
          }
        : undefined;

    const _accessibilityValue =
      accessibilityValue != null ||
      ariaValueMax != null ||
      ariaValueMin != null ||
      ariaValueNow != null ||
      ariaValueText != null
        ? {
            max: ariaValueMax ?? accessibilityValue?.max,
            min: ariaValueMin ?? accessibilityValue?.min,
            now: ariaValueNow ?? accessibilityValue?.now,
            text: ariaValueText ?? accessibilityValue?.text,
          }
        : undefined;

    const _keyDown =
      otherProps.keyDownEvents || otherProps.onKeyDown
        ? (event: KeyEvent) => {
            if (
              otherProps.keyDownEvents &&
              event.isPropagationStopped() !== true
            ) {
              // $FlowFixMe - keyDownEvents was already checked to not be undefined
              for (const el of otherProps.keyDownEvents) {
                if (
                  event.nativeEvent.code === el.code &&
                  el.handledEventPhase === 3
                ) {
                  event.stopPropagation();
                }
              }
            }
            otherProps.onKeyDown && otherProps.onKeyDown(event);
          }
        : undefined;

    const _keyUp =
      otherProps.keyUpEvents || otherProps.onKeyUp
        ? (event: KeyEvent) => {
            if (
              otherProps.keyUpEvents &&
              event.isPropagationStopped() !== true
            ) {
              // $FlowFixMe - keyUpEvents was already checked to not be undefined
              for (const el of otherProps.keyUpEvents) {
                if (
                  event.nativeEvent.code === el.code &&
                  el.handledEventPhase === 3
                ) {
                  event.stopPropagation();
                }
              }
            }
            otherProps.onKeyUp && otherProps.onKeyUp(event);
          }
        : undefined;

    const _keyDownCapture =
      otherProps.keyDownEvents || otherProps.onKeyDownCapture
        ? (event: KeyEvent) => {
            if (
              otherProps.keyDownEvents &&
              event.isPropagationStopped() !== true
            ) {
              // $FlowFixMe - keyDownEvents was already checked to not be undefined
              for (const el of otherProps.keyDownEvents) {
                if (
                  event.nativeEvent.code === el.code &&
                  el.handledEventPhase === 1
                ) {
                  event.stopPropagation();
                }
              }
            }
            otherProps.onKeyDownCapture && otherProps.onKeyDownCapture(event);
          }
        : undefined;

    const _keyUpCapture =
      otherProps.keyUpEvents || otherProps.onKeyUpCapture
        ? (event: KeyEvent) => {
            if (
              otherProps.keyUpEvents &&
              event.isPropagationStopped() !== true
            ) {
              // $FlowFixMe - keyUpEvents was already checked to not be undefined
              for (const el of otherProps.keyUpEvents) {
                if (
                  event.nativeEvent.code === el.code &&
                  el.handledEventPhase === 1
                ) {
                  event.stopPropagation();
                }
              }
            }
            otherProps.onKeyUpCapture && otherProps.onKeyUpCapture(event);
          }
        : undefined;

    // [Windows
    const _focusable = tabIndex !== undefined ? !tabIndex : focusable;
    const _accessible =
      importantForAccessibility === 'no-hide-descendants'
        ? false
        : otherProps.accessible;

    if (_focusable === true && _accessible === false) {
      console.warn(
        'All focusable views should report proper accessibility information. Views marked as focusable should always be accessible.',
      );
    }

    const computedImportantForAccessibility =
      ariaHidden === true ||
      importantForAccessibility === 'no-hide-descendants' ||
      accessibilityElementsHidden === true
        ? 'no-hide-descendants'
        : importantForAccessibility;

    const actualView = (
      <ViewNativeComponent
        {...otherProps}
        accessibilityLiveRegion={
          ariaLive === 'off' ? 'none' : ariaLive ?? accessibilityLiveRegion
        }
        accessibilityLabel={ariaLabel ?? accessibilityLabel}
        accessibilityLevel={ariaLevel ?? accessibilityLevel}
        accessibilityDescription={ariaDescription ?? accessibilityDescription}
        accessibilityPosInSet={ariaPosinset ?? accessibilityPosInSet}
        accessibilitySetSize={ariaSetsize ?? accessibilitySetSize}
        focusable={_focusable}
        disabled={disabled}
        accessibilityState={_accessibilityState}
        accessibilityElementsHidden={ariaHidden ?? accessibilityElementsHidden}
        accessibilityLabelledBy={_accessibilityLabelledBy}
        accessibilityValue={_accessibilityValue}
        importantForAccessibility={computedImportantForAccessibility}
        nativeID={id ?? nativeID}
        ref={forwardedRef}
        onKeyDown={_keyDown}
        onKeyDownCapture={_keyDownCapture}
        onKeyUp={_keyUp}
        onKeyUpCapture={_keyUpCapture}
        // [Windows
        accessible={_accessible}
        children={otherProps.children}
        // Windows]
      />
    );

    // [Windows - Paper doesn't support Views in Text while Fabric does
    if (global.RN$Bridgeless !== true) {
      return (
        // [Windows
        // In core this is a TextAncestor.Provider value={false} See
        // https://github.com/facebook/react-native/commit/66601e755fcad10698e61d20878d52194ad0e90c
        // But since Views are not currently supported in Text, we do not need the extra provider
        <TextAncestor.Consumer>
          {consumerHasTextAncestor => {
            invariant(
              !consumerHasTextAncestor,
              'Nesting of <View> within <Text> is not currently supported.',
            );
            return (
              <ViewNativeComponent
                {...otherProps}
                accessibilityLiveRegion={
                  ariaLive === 'off'
                    ? 'none'
                    : ariaLive ?? accessibilityLiveRegion
                }
                accessibilityLabel={ariaLabel ?? accessibilityLabel}
                accessibilityLevel={ariaLevel ?? accessibilityLevel}
                accessibilityDescription={
                  ariaDescription ?? accessibilityDescription
                }
                accessibilityPosInSet={ariaPosinset ?? accessibilityPosInSet}
                accessibilitySetSize={ariaSetsize ?? accessibilitySetSize}
                focusable={_focusable}
                disabled={disabled}
                accessibilityState={_accessibilityState}
                accessibilityElementsHidden={
                  ariaHidden ?? accessibilityElementsHidden
                }
                accessibilityLabelledBy={_accessibilityLabelledBy}
                accessibilityValue={_accessibilityValue}
                importantForAccessibility={computedImportantForAccessibility}
                nativeID={id ?? nativeID}
                ref={forwardedRef}
                onKeyDown={_keyDown}
                onKeyDownCapture={_keyDownCapture}
                onKeyUp={_keyUp}
                onKeyUpCapture={_keyUpCapture}
                // [Windows
                accessible={_accessible}
                children={
                  computedImportantForAccessibility === 'no-hide-descendants'
                    ? childrenWithImportantForAccessibility(otherProps.children)
                    : otherProps.children
                }
                // Windows]
              />
            );
          }}
        </TextAncestor.Consumer>
        // Windows]
      );
    } else {
      if (hasTextAncestor) {
        return (
          <TextAncestor.Provider value={false}>
            {actualView}
          </TextAncestor.Provider>
        );
      }
    }
    // Windows]

    return actualView;
  },
);

View.displayName = 'View';

export default View;
