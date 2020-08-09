import { MP } from "./types";

export const getSpacing = (props: MP) => {
  if (props.mt) {
    return `
      marign-top: ${props.mt}
    `;
  } else if (props.ml) {
    return `
      margin-left: ${props.ml}
    `;
  } else if (props.mr) {
    return `
      margin-right: ${props.mr}
    `;
  } else if (props.mb) {
    return `
      margin-bottom: ${props.mb}
    `;
  } else if (props.mx) {
    return `
      margin-right: ${props.mx};
      margin-left: ${props.mx};
    `;
  } else if (props.my) {
    return `
      margin-top: ${props.my}
      margin-bottom: ${props.my};
    `;
  } else if (props.pt) {
    return `
      padding-top: ${props.pt}
    `;
  } else if (props.pl) {
    return `
      padding-left: ${props.pl}
    `;
  } else if (props.pr) {
    return `
      padding-right: ${props.pr}
    `;
  } else if (props.pb) {
    return `
      padding-bottom: ${props.pb}
    `;
  } else if (props.px) {
    return `
      padding-right: ${props.px};
      padding-left: ${props.px};
    `;
  } else if (props.py) {
    return `
      padding-top: ${props.py}
      padding-bottom: ${props.py};
    `;
  }
};
