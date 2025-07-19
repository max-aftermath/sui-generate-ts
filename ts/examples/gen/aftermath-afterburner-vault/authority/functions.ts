import {PUBLISHED_AT} from "..";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {GenericArg, generic, obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function createPackageAdminCapAndKeep( tx: Transaction, typeArg: string, t0: GenericArg ) { return tx.moveCall({ target: `${PUBLISHED_AT}::authority::create_package_admin_cap_and_keep`, typeArguments: [typeArg], arguments: [ generic(tx, `${typeArg}`, t0) ], }) }

export function createVaultAdminCap( tx: Transaction, id: string | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::authority::create_vault_admin_cap`, arguments: [ pure(tx, id, `${ID.$typeName}`) ], }) }

export function destroyVaultAdminCap( tx: Transaction, authorityCap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::authority::destroy_vault_admin_cap`, arguments: [ obj(tx, authorityCap) ], }) }

export function vaultId( tx: Transaction, typeArg: string, authorityCap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::authority::vault_id`, typeArguments: [typeArg], arguments: [ obj(tx, authorityCap) ], }) }

export interface AssertHasAuthorityOverArgs { authorityCap: TransactionObjectInput; id: string | TransactionArgument }

export function assertHasAuthorityOver( tx: Transaction, typeArg: string, args: AssertHasAuthorityOverArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::authority::assert_has_authority_over`, typeArguments: [typeArg], arguments: [ obj(tx, args.authorityCap), pure(tx, args.id, `${ID.$typeName}`) ], }) }

export function thisPackage( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::authority::this_package`, arguments: [ ], }) }
