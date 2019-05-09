import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Switch from '../switch';

/**
 * ToggleRenderer, used to output the actual DOM markup for the component
 */
const ToggleRenderer = ({
  disabled,
  id,
  label,
  onChange,
  onKeyDown,
  texts,
  theme,
  type,
  value
}) => {
  /**
   * Triggered when on/off is clicked
   * @param {HTMLElement} the element that triggered the event
   */
  const _handleChange = (e, { checked }) => {
    onChange(e, { value: checked });
  };

  return (
    <div
      className={classnames(
        'carbon',
        'cbn-toggle',
        `cbn-theme--${theme}`,
        { 'cbn-toggle--disabled': disabled }
      )}
      onKeyDown={onKeyDown}>
      {
        label && (
          <span className={classnames('cbn-toggle__label', { 'cbn-toggle--bold': type === 'bold' })}>
            { label }
          </span>
        )
      }
      <Switch
        checked={value}
        id={id}
        disabled={disabled}
        name='toggle'
        onChange={_handleChange}
        type='checkbox'
        theme={theme}
        value={texts.join('/')}>
        <label
          aria-label={`${label ? `${label}: ` : ''}${texts[value ? 0 : 1]}`}
          className='cbn-toggle__switch'
          htmlFor={id}>
          <div
            className={classnames('cbn-toggle__button', { 'cbn-toggle--selected': value })}>
            <div className='cbn-toggle__text'>{texts[0]}</div>
          </div>
          <div
            className={classnames('cbn-toggle__separator', { 'cbn-toggle__separator--right': !value })}>
            /
          </div>
          <div
            className={classnames('cbn-toggle__button', { 'cbn-toggle--selected': !value })}>
            <div className='cbn-toggle__text'>{texts[1]}</div>
          </div>
        </label>
      </Switch>
    </div>
  );
};

ToggleRenderer.propTypes = {
  /**
   * Toggle whether component is disabled
   */
  disabled: PropTypes.bool.isRequired,
  /**
   * A unique is for the toggle (autogenerated if not provided)
   */
  id: PropTypes.string.isRequired,
  /**
   * Label for the toggle
   */
  label: PropTypes.string.isRequired,
  /**
   * Callback when the toggle changes value
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Callback when the user presses a key while the toggle is focussed
   */
  onKeyDown: PropTypes.func.isRequired,
  /**
   * Array of 2 strings to display in the toggle
   */
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Theme name for component, allowed [dark, light]
   */
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  /**
   * Sets the label type
   */
  type: PropTypes.oneOf(['regular', 'bold']).isRequired,
  /**
   * Initial value
   */
  value: PropTypes.bool.isRequired
};

export default ToggleRenderer;
