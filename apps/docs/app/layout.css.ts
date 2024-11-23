import { style, createVar } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { theme } from "@spirit-ui/theme";

const headerHeight = createVar();
const maxContentWidth = createVar();
const autoMargin = createVar();

export const html = style({
  vars: {
    [headerHeight]: "64px",
    [maxContentWidth]: "1000px",
    [autoMargin]: "0 auto",
  },
  color: theme.colors.gray950,
  fontFamily: theme.fonts.inter,
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "100vw",
});

export const header = style({
  border: `1px solid ${theme.colors.gray200}`,
  height: headerHeight,
});

export const headerContent = style({
  alignItems: "center",
  display: "flex",
  height: "100%",
  margin: autoMargin,
  maxWidth: maxContentWidth,
  paddingInline: theme.space.spacingL,
});

export const main = style({
  display: "grid",
  gridTemplateColumns: "260px 1fr",
  height: calc.subtract("100%", headerHeight),
  margin: autoMargin,
  maxWidth: maxContentWidth,
  width: "100%",
});

export const sidebar = style({
  height: "100%",
  paddingInline: theme.space.spacingL,
});

export const sidebarSection = style({
  paddingBlock: theme.space.spacingL,
});

export const sidebarSectionNav = style({
  listStyle: "none",
});

export const sidebarSectionLink = style({
  color: theme.colors.gray950,
  textDecoration: "none",
});

export const content = style({
  height: "100%",
  overflow: "auto",
  paddingInline: theme.space.spacingL,
});
