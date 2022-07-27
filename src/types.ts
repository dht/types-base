export {};

declare global {
    export type Json = Record<string, any>;
    export type Callback = () => void;
}
