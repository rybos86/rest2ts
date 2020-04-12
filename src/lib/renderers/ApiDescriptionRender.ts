import { ApiDescription } from "../generators/ApiDescriptionGenerator";
import { render } from "mustache";

export const renderDescription = (api: ApiDescription) => {
  const rows = Object.keys(api)
    .map((e) => {
      const view = {
        prop: e,
        value: api[e],
      };

      return render(`{{ prop }}: "{{{ value }}}"`, view);
    })
    .join(",\n\t");
  const view = render(`export const API = { \n\t{{{ rows }}}\n}\n`, { rows });

  return view;
};
