import * as package_onchain_1 from "../_dependencies/onchain/0x1/init";
import * as package_onchain_2 from "../_dependencies/onchain/0x2/init";
import * as package_source_1 from "../_dependencies/source/0x1/init";
import * as package_onchain_79ee374b9e3c60c00a19fdbeaea25731bbea8f2cab9bb61bb712543e0ba55b7a from "../aftermath-afterburner-vault/init";
import * as package_source_dee9 from "../deep-book/init";
import * as package_source_2 from "../sui/init";
import {StructClassLoader} from "./loader";

function registerClassesSource(loader: StructClassLoader) { package_source_1.registerClasses(loader);
package_source_2.registerClasses(loader);
package_source_dee9.registerClasses(loader);
 }

function registerClassesOnchain(loader: StructClassLoader) { package_onchain_1.registerClasses(loader);
package_onchain_2.registerClasses(loader);
package_onchain_79ee374b9e3c60c00a19fdbeaea25731bbea8f2cab9bb61bb712543e0ba55b7a.registerClasses(loader);
 }

export function registerClasses(loader: StructClassLoader) { registerClassesOnchain(loader); registerClassesSource(loader); }
