import {PUBLISHED_AT} from "..";
import {GenericArg, generic, obj} from "../../_framework/util";
import {Transaction, TransactionObjectInput} from "@mysten/sui/transactions";

export function createVersion( tx: Transaction, typeArg: string, t0: GenericArg ) { return tx.moveCall({ target: `${PUBLISHED_AT}::version::create_version`, typeArguments: [typeArg], arguments: [ generic(tx, `${typeArg}`, t0) ], }) }

export function currentVersion( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::version::current_version`, arguments: [ ], }) }

export interface UpgradeVersionArgs { authorityCap: TransactionObjectInput; version: TransactionObjectInput }

export function upgradeVersion( tx: Transaction, args: UpgradeVersionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::version::upgrade_version`, arguments: [ obj(tx, args.authorityCap), obj(tx, args.version) ], }) }

export function assertCorrectPackage( tx: Transaction, version: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::version::assert_correct_package`, arguments: [ obj(tx, version) ], }) }
