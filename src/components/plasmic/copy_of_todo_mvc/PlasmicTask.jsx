// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4i89zEd2mZSwh8sdV1ACi1
// Component: ZOATDhZ75qvqt
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 7bW5PLqcuYYi8/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_copy_of_todo_mvc.module.css"; // plasmic-import: 4i89zEd2mZSwh8sdV1ACi1/projectcss
import sty from "./PlasmicTask.module.css"; // plasmic-import: ZOATDhZ75qvqt/css

export const PlasmicTask__VariantProps = new Array("state");

export const PlasmicTask__ArgProps = new Array("children");

function PlasmicTask__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootglobal_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          ),

          [sty.rootstate_checked]: hasVariant(variants, "state", "checked"),
          [sty.rootstate_editing]: hasVariant(variants, "state", "editing"),
          [sty.rootstate_editing_global_theme_dark]:
            hasVariant(variants, "state", "editing") &&
            hasVariant(globalVariants, "theme", "dark")
        }
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__aettB, {
          [sty.freeBoxstate_checked__aettBwJzaw]: hasVariant(
            variants,
            "state",
            "checked"
          ),

          [sty.freeBoxstate_editing__aettBqi57O]: hasVariant(
            variants,
            "state",
            "editing"
          ),

          [sty.freeBoxstate_editing_global_theme_dark__aettBqi57OXl4Fj]:
            hasVariant(variants, "state", "editing") &&
            hasVariant(globalVariants, "theme", "dark")
        })}
      >
        {(hasVariant(variants, "state", "editing") ? false : true) ? (
          <div
            data-plasmic-name={"checkbox"}
            data-plasmic-override={overrides.checkbox}
            className={classNames(projectcss.all, sty.checkbox, {
              [sty.checkboxstate_checked]: hasVariant(
                variants,
                "state",
                "checked"
              ),

              [sty.checkboxstate_checked_global_theme_dark]:
                hasVariant(variants, "state", "checked") &&
                hasVariant(globalVariants, "theme", "dark"),
              [sty.checkboxstate_editing]: hasVariant(
                variants,
                "state",
                "editing"
              )
            })}
          >
            {(hasVariant(variants, "state", "checked") ? true : false) ? (
              <img
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(projectcss.all, projectcss.img, sty.img, {
                  [sty.imgstate_checked]: hasVariant(
                    variants,
                    "state",
                    "checked"
                  ),

                  [sty.imgstate_checked_global_theme_dark]:
                    hasVariant(variants, "state", "checked") &&
                    hasVariant(globalVariants, "theme", "dark"),
                  [sty.imgstate_editing]: hasVariant(
                    variants,
                    "state",
                    "editing"
                  )
                })}
                src={
                  hasVariant(variants, "state", "checked")
                    ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3Ryb2tlLXdpZHRoPSIwIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHlsZT0iZmlsbDogcmdiKDQsIDE0MywgNjQpOyI+PHBhdGggZD0iTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeiIvPjwvc3ZnPg=="
                    : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3Ryb2tlLXdpZHRoPSIwIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6Ii8+PC9zdmc+"
                }
              />
            ) : null}
          </div>
        ) : null}
      </div>

      <div
        className={classNames(projectcss.all, sty.freeBox__mbgMh, {
          [sty.freeBoxglobal_theme_dark__mbgMhXl4Fj]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          ),

          [sty.freeBoxstate_checked__mbgMhWJzaw]: hasVariant(
            variants,
            "state",
            "checked"
          ),

          [sty.freeBoxstate_editing__mbgMhQi57O]: hasVariant(
            variants,
            "state",
            "editing"
          ),

          [sty.freeBoxstate_editing_global_theme_dark__mbgMhQi57OXl4Fj]:
            hasVariant(variants, "state", "editing") &&
            hasVariant(globalVariants, "theme", "dark")
        })}
      >
        {(hasVariant(variants, "state", "editing") ? false : true) ? (
          <div
            data-plasmic-name={"label"}
            data-plasmic-override={overrides.label}
            className={classNames(projectcss.all, sty.label, {
              [sty.labelstate_checked]: hasVariant(
                variants,
                "state",
                "checked"
              ),

              [sty.labelstate_editing]: hasVariant(variants, "state", "editing")
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Some kind of text here",
              value: args.children,
              className: classNames(sty.slotTargetChildren, {
                [sty.slotTargetChildrenglobal_theme_dark]: hasVariant(
                  globalVariants,
                  "theme",
                  "dark"
                ),

                [sty.slotTargetChildrenstate_checked]: hasVariant(
                  variants,
                  "state",
                  "checked"
                ),

                [sty.slotTargetChildrenstate_checked_global_theme_dark]:
                  hasVariant(variants, "state", "checked") &&
                  hasVariant(globalVariants, "theme", "dark"),
                [sty.slotTargetChildrenstate_editing]: hasVariant(
                  variants,
                  "state",
                  "editing"
                )
              })
            })}
          </div>
        ) : null}

        {(hasVariant(variants, "state", "editing") ? true : false) ? (
          <input
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput ?? overrides.textbox}
            className={classNames(
              projectcss.all,
              projectcss.input,
              sty.textInput,
              {
                [sty.textInputstate_checked]: hasVariant(
                  variants,
                  "state",
                  "checked"
                ),

                [sty.textInputstate_editing]: hasVariant(
                  variants,
                  "state",
                  "editing"
                ),

                [sty.textInputstate_editing_global_theme_dark]:
                  hasVariant(variants, "state", "editing") &&
                  hasVariant(globalVariants, "theme", "dark")
              }
            )}
            placeholder={"Some placeholder text"}
            type={"text"}
          />
        ) : null}

        {(hasVariant(variants, "state", "editing") ? false : true) ? (
          <div
            data-plasmic-name={"box"}
            data-plasmic-override={overrides.box}
            className={classNames(projectcss.all, sty.box, {
              [sty.boxstate_checked]: hasVariant(variants, "state", "checked"),
              [sty.boxstate_editing]: hasVariant(variants, "state", "editing")
            })}
          >
            <button
              data-plasmic-name={"deleteBtn"}
              data-plasmic-override={overrides.deleteBtn}
              className={classNames(
                projectcss.all,
                projectcss.button,
                projectcss.__wab_text,
                sty.deleteBtn,
                {
                  [sty.deleteBtnstate_checked]: hasVariant(
                    variants,
                    "state",
                    "checked"
                  ),

                  [sty.deleteBtnstate_editing]: hasVariant(
                    variants,
                    "state",
                    "editing"
                  )
                }
              )}
            >
              {triggers.hover_root ? "×" : "×"}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "checkbox",
    "img",
    "label",
    "textInput",
    "textbox",
    "box",
    "deleteBtn"
  ],

  checkbox: ["checkbox", "img"],
  img: ["img"],
  label: ["label"],
  textInput: ["textInput", "textbox"],
  box: ["box", "deleteBtn"],
  deleteBtn: ["deleteBtn"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTask__ArgProps,
          internalVariantPropNames: PlasmicTask__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicTask__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTask";
  } else {
    func.displayName = `PlasmicTask.${nodeName}`;
  }
  return func;
}

export const PlasmicTask = Object.assign(
  // Top-level PlasmicTask renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    checkbox: makeNodeComponent("checkbox"),
    img: makeNodeComponent("img"),
    label: makeNodeComponent("label"),
    textInput: makeNodeComponent("textInput"),
    box: makeNodeComponent("box"),
    deleteBtn: makeNodeComponent("deleteBtn"),
    // Metadata about props expected for PlasmicTask
    internalVariantProps: PlasmicTask__VariantProps,
    internalArgProps: PlasmicTask__ArgProps
  }
);

export default PlasmicTask;
/* prettier-ignore-end */
