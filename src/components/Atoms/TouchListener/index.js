import { PureComponent, createElement } from 'react';
import PropTypes, { oneOfType } from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  tagName: PropTypes.string,
  action: PropTypes.func,
  children: oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string,
    PropTypes.node,
  ]),
};

const defaultProps = {
  className: '',
  tagName: null,
  action: () => {},
  children: null,
};

class TouchListener extends PureComponent {
  constructor(props) {
    super(props);

    this.startX = 0;
    this.startY = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.dirX = null;
    this.dirY = null;

    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
  }

  touchStart(evt) {
    const [touches] = evt.touches;
    this.startX = touches.pageX;
    this.startY = touches.pageY;
  }

  touchMove(evt) {
    const [touches] = evt.touches;
    this.deltaX = touches.pageX - this.startX;
    this.deltaY = touches.pageY - this.startY;
    this.dirX = this.deltaX < 0 ? 'left' : 'right';
    this.dirY = this.deltaY < 0 ? 'up' : 'down';
  }

  touchEnd() {
    const { action } = this.props;
    action({
      deltaX: this.deltaX,
      deltaY: this.deltaY,
      dirX: this.dirX,
      dirY: this.dirY,
    });
    this.startX = 0;
    this.startY = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.dirX = null;
    this.dirY = null;
  }

  render() {
    const { className, tagName, children } = this.props;
    return createElement(
      tagName || 'div',
      {
        className,
        onTouchStart: this.touchStart,
        onTouchMove: this.touchMove,
        onTouchEnd: this.touchEnd,
      },
      children
    );
  }
}
TouchListener.propTypes = propTypes;
TouchListener.defaultProps = defaultProps;
export default TouchListener;
