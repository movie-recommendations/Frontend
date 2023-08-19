export enum SliderControllerTypes {
	left = 'left',
	right = 'right',
}

export interface ISliderController {
	direction: SliderControllerTypes;
	canScrollLeft?: boolean;
	canScrollRight?: boolean;
	handleScroll: any;
}
