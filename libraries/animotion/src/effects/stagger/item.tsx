import { type MotionDivProps, makeAnimated } from "@utils/index";

const staggerItem: MotionDivProps = {
	layout: true,
	//
	variants: {
		hidden: { opacity: 0, y: 0, x: 0 },
		visible: { opacity: 1, y: 0, x: 0 },
	},
};

const AnimatedStaggerItem = makeAnimated(staggerItem);

export { AnimatedStaggerItem };
