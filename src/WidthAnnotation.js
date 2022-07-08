import {Annotation} from "./Annotation.js";

export class WidthAnnotation extends Annotation {
	constructor (args = {}) {
		super(args);

    this.elTitlebar[0].classList.add('width-annotation-titlebar');
    this.elTitlebar[0].classList.remove('annotation-titlebar');
  }
};
