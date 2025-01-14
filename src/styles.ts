import { containerClass, disbaleTouchActions, dropPlaceholderFlexContainerClass, dropPlaceholderInnerClass, dropPlaceholderWrapperClass, ghostClass, noUserSelectClass, stretcherElementClass, wrapperClass, dropPlaceholderDefaultClass } from './constants';
import { Dictionary } from './interfaces';

const verticalWrapperClass = {
}

const horizontalWrapperClass = {
}

const stretcherElementHorizontalClass = {
}

const css = {
	[`.${containerClass}`]: {
		'position': 'relative',
		'min-height': '30px',
		'min-width': '30px'
	},
	[`.${containerClass}.horizontal`]: {
		'display': 'flex',
		'flex-direction': 'row'
	},
	[`.${containerClass}.horizontal > .${stretcherElementClass}`]: stretcherElementHorizontalClass,
	[`.${containerClass}.horizontal > .${wrapperClass}`]: horizontalWrapperClass,
	[`.${containerClass}.vertical > .${wrapperClass}`]: verticalWrapperClass,
	[`.${wrapperClass}`]: {
		'box-sizing': 'border-box'
	},
	[`.${wrapperClass}.horizontal`]: horizontalWrapperClass,
	[`.${wrapperClass}.vertical`]: verticalWrapperClass,
	[`.${wrapperClass}.animated`]: {
		'transition': 'transform ease',
	},
	[`.${ghostClass}`]: {
		'box-sizing': 'border-box'
	},
	[`.${ghostClass}.animated`]: {
		'transition': 'all ease-in-out'
	},
	[`.${ghostClass} *`]: {
		'pointer-events': 'none'
	},
	[`.${disbaleTouchActions} *`]: {
		'touch-action': 'none',
		'-ms-touch-action': 'none'
	},
	[`.${noUserSelectClass}`]: {
		'-webkit-touch-callout': 'none',
		'-webkit-user-select': 'none',
		'-khtml-user-select': 'none',
		'-moz-user-select': 'none',
		'-ms-user-select': 'none',
		'user-select': 'none'
	},
	[`.${dropPlaceholderInnerClass}`]: {
		'flex': '1'
	},
	[`.${containerClass}.horizontal > .${dropPlaceholderWrapperClass}`]: {
	},
	[`.${containerClass}.vertical > .${dropPlaceholderWrapperClass}`]: {
	},
	[`.${dropPlaceholderFlexContainerClass}`]: {
		'display': 'flex',
		'justify-content': 'stretch',
		'align-items': 'stretch'
	},
	[`.${dropPlaceholderDefaultClass}`]: {
		'background-color': 'rgba(150, 150, 150, 0.1)',
  	'border': '1px solid #ccc',
	}
};

function convertToCssString(css: Dictionary): string {
	return Object.keys(css).reduce((styleString, propName) => {
		const propValue = css[propName];
		if (typeof (propValue) === 'object') {
			return `${styleString}${propName}{${convertToCssString(propValue)}}`;
		}
		return `${styleString}${propName}:${propValue};`;
	}, '');
}

function addStyleToHead() {
	if (typeof (window) !== 'undefined') {
		const head = window.document.head || window.document.getElementsByTagName("head")[0];
		const style = window.document.createElement("style") as any;
		style.id = 'smooth-dnd-style-definitions';
		const cssString = convertToCssString(css);
		style.type = 'text/css';
		if (style.styleSheet) {
			style.styleSheet.cssText = cssString;
		} else {
			style.appendChild(window.document.createTextNode(cssString));
		}

		head.appendChild(style);
	}
}

function addCursorStyleToBody(cursor: string) {
	if (cursor && typeof (window) !== 'undefined') {
		const head = window.document.head || window.document.getElementsByTagName("head")[0];
		const style = window.document.createElement("style") as any;
		const cssString = convertToCssString({
			'body *': {
				cursor: `${cursor} !important`
			}
		});
		style.type = 'text/css';
		if (style.styleSheet) {
			style.styleSheet.cssText = cssString;
		} else {
			style.appendChild(window.document.createTextNode(cssString));
		}

		head.appendChild(style);

		return style;
	}

	return null;
}

function removeStyle(styleElement: HTMLStyleElement) {
	if (styleElement && typeof (window) !== 'undefined') {
		const head = window.document.head || window.document.getElementsByTagName("head")[0];
		head.removeChild(styleElement);
	}
}

export { addStyleToHead, addCursorStyleToBody, removeStyle };

