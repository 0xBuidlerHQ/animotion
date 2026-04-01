import { type MotionDivProps, makeAnimated } from "@utils/index";

const viewSwitch: MotionDivProps = {
	initial: { opacity: 0, y: 16 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
	exit: { opacity: 0, y: -16, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
};

const AnimatedViewSwitch = makeAnimated(viewSwitch);

export { AnimatedViewSwitch };
