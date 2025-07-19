import {PUBLISHED_AT} from "..";
import {TypeName} from "../../_dependencies/onchain/0x1/type-name/structs";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {GenericArg, generic, pure, vector} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function emit( tx: Transaction, typeArg: string, t0: GenericArg ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit`, typeArguments: [typeArg], arguments: [ generic(tx, `${typeArg}`, t0) ], }) }

export interface EmitCreatedVaultEventArgs { id: string | TransactionArgument; vecU8: Array<number | TransactionArgument> | TransactionArgument; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument; u644: bigint | TransactionArgument }

export function emitCreatedVaultEvent( tx: Transaction, typeArg: string, args: EmitCreatedVaultEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_created_vault_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.id, `${ID.$typeName}`), pure(tx, args.vecU8, `vector<u8>`), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`), pure(tx, args.u644, `u64`) ], }) }

export interface EmitInitializedRewardEventArgs { id: string | TransactionArgument; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument }

export function emitInitializedRewardEvent( tx: Transaction, typeArg: string, args: EmitInitializedRewardEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_initialized_reward_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.id, `${ID.$typeName}`), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`) ], }) }

export interface EmitAddedRewardEventArgs { id: string | TransactionArgument; u64: bigint | TransactionArgument }

export function emitAddedRewardEvent( tx: Transaction, typeArg: string, args: EmitAddedRewardEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_added_reward_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.id, `${ID.$typeName}`), pure(tx, args.u64, `u64`) ], }) }

export interface EmitUpdatedEmissionScheduleEventArgs { id: string | TransactionArgument; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function emitUpdatedEmissionScheduleEvent( tx: Transaction, typeArg: string, args: EmitUpdatedEmissionScheduleEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_updated_emission_schedule_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.id, `${ID.$typeName}`), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface EmitStakedEventArgs { id1: string | TransactionArgument; id2: string | TransactionArgument; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u8: number | TransactionArgument; u643: bigint | TransactionArgument; u644: bigint | TransactionArgument; u645: bigint | TransactionArgument }

export function emitStakedEvent( tx: Transaction, typeArg: string, args: EmitStakedEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_staked_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.id1, `${ID.$typeName}`), pure(tx, args.id2, `${ID.$typeName}`), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u8, `u8`), pure(tx, args.u643, `u64`), pure(tx, args.u644, `u64`), pure(tx, args.u645, `u64`) ], }) }

export interface EmitLockedEventArgs { id1: string | TransactionArgument; id2: string | TransactionArgument; u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument; u644: bigint | TransactionArgument }

export function emitLockedEvent( tx: Transaction, typeArg: string, args: EmitLockedEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_locked_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.id1, `${ID.$typeName}`), pure(tx, args.id2, `${ID.$typeName}`), pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`), pure(tx, args.u644, `u64`) ], }) }

export interface EmitUnlockedEventArgs { id1: string | TransactionArgument; id2: string | TransactionArgument; u64: bigint | TransactionArgument }

export function emitUnlockedEvent( tx: Transaction, typeArg: string, args: EmitUnlockedEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_unlocked_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.id1, `${ID.$typeName}`), pure(tx, args.id2, `${ID.$typeName}`), pure(tx, args.u64, `u64`) ], }) }

export interface EmitJoinedEventArgs { id1: string | TransactionArgument; id2: string | TransactionArgument }

export function emitJoinedEvent( tx: Transaction, args: EmitJoinedEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_joined_event`, arguments: [ pure(tx, args.id1, `${ID.$typeName}`), pure(tx, args.id2, `${ID.$typeName}`) ], }) }

export interface EmitSplitEventArgs { id1: string | TransactionArgument; id2: string | TransactionArgument }

export function emitSplitEvent( tx: Transaction, args: EmitSplitEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_split_event`, arguments: [ pure(tx, args.id1, `${ID.$typeName}`), pure(tx, args.id2, `${ID.$typeName}`) ], }) }

export interface EmitDepositedPrincipalEventArgs { id1: string | TransactionArgument; id2: string | TransactionArgument; u64: bigint | TransactionArgument }

export function emitDepositedPrincipalEvent( tx: Transaction, typeArg: string, args: EmitDepositedPrincipalEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_deposited_principal_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.id1, `${ID.$typeName}`), pure(tx, args.id2, `${ID.$typeName}`), pure(tx, args.u64, `u64`) ], }) }

export interface EmitWithdrewPrincipalEventArgs { id1: string | TransactionArgument; id2: string | TransactionArgument; u64: bigint | TransactionArgument }

export function emitWithdrewPrincipalEvent( tx: Transaction, typeArg: string, args: EmitWithdrewPrincipalEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_withdrew_principal_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.id1, `${ID.$typeName}`), pure(tx, args.id2, `${ID.$typeName}`), pure(tx, args.u64, `u64`) ], }) }

export interface EmitHarvestedRewardsEventArgs { id: string | TransactionArgument; vecTypeName: Array<TransactionObjectInput> | TransactionArgument; vecU64: Array<bigint | TransactionArgument> | TransactionArgument }

export function emitHarvestedRewardsEvent( tx: Transaction, args: EmitHarvestedRewardsEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_harvested_rewards_event`, arguments: [ pure(tx, args.id, `${ID.$typeName}`), vector(tx, `${TypeName.$typeName}`, args.vecTypeName), pure(tx, args.vecU64, `vector<u64>`) ], }) }

export function emitDestroyedStakedPositionEvent( tx: Transaction, id: string | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::events::emit_destroyed_staked_position_event`, arguments: [ pure(tx, id, `${ID.$typeName}`) ], }) }
