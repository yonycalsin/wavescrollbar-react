import { Component } from "react";

interface TransitionProps {
   readonly duration?: string;
   readonly delay?: string;
   readonly timing?: "linear" | "ease" | "ease-in" | "ease-in-out" | "ease-out";
}
interface GradientProps {
   readonly angle?: string;
   readonly colors?: Array<string>;
}

interface Props {
   setHeight(value?: string): void;
   setTransition(options?: TransitionProps): void;
   setBackground(color?: string): void;
   setGradient(options?: GradientProps): void;
   setContainerBackground(color?: string): void;
   setAnimation(): void;
}
interface State {
   wavescrollbarReact?: any
}

declare class WavescrollbarReact extends Component<Props, State> {

}

export = WavescrollbarReact