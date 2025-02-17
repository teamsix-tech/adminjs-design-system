/**
 * @load ./button.doc.md
 * @component
 * @see ButtonProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-button--default StoryBook}
 * @hideconstructor
 * @subcategory Atoms
 * @section design-system
 */
declare const Button: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {
    className: string;
} & Pick<import("styled-system").ColorProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol>, "opacity" | "bg" | "backgroundColor"> & {
    color?: string | undefined;
} & import("styled-system").SpaceProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol> & import("styled-system").TypographyProps<Required<import("styled-system").Theme<string | number>>> & {
    variant?: "text" | "default" | "primary" | "danger" | "success" | "info" | "secondary" | "light" | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "md" | undefined;
    rounded?: boolean | undefined;
    label?: string | undefined;
}, "className">;
export { Button };
export default Button;
