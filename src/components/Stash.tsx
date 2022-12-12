const STASH_TAB_SIZE = 24;
const GRID_SIZE = 20;

import { StaticStash } from "~/MockData";
import "./Stash.css";

export default function Stash() {
    const items = StaticStash.items.map(i => {
        const { x, y, w, h, name, icon } = i;

        const width = w * GRID_SIZE;
        const height = h * GRID_SIZE;
        return (
            <div style={{
                // "grid-column": `${x + 1} / item ${y + 1}`, width: `${width}px`, height: `${height}px`
                position: "absolute",
                "grid-row-start": y + 1,
                "grid-row-end": y + height,
                "grid-column-start": x + 1,
                "grid-column-end": x + width,
                // outline: "1px solid grey",
            }}>
                <img src={icon} ></img>
            </div>
        )
    })

    const defaultGrid = Array.from(Array(12 * 12)).map(k => {
        return (
            <div id={k} class="grid-item">{k}</div>
        )
    });

    console.log(defaultGrid)
    return (
        <div class="stashLayout">
            {defaultGrid}
            {items}
        </div>
    )
}