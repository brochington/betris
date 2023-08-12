import { World } from "@brochington/ecstatic";
import { Components } from "../components";

import manageClock from "./manageClock";
import renderStage from "./renderStage";
import renderBlock from "./renderBlock";

export default function addSystems(world: World<Components>) {
  world.addSystem(manageClock.components, manageClock);
  world.addSystem(renderStage.components, renderStage);
  world.addSystem(renderBlock.components, renderBlock);
}