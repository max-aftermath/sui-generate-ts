import {PUBLISHED_AT} from "..";
import {pure} from "../../_framework/util";
import {Transaction, TransactionArgument} from "@mysten/sui/transactions";

export function max( tx: Transaction, vecU64: Array<bigint | TransactionArgument> | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::max`, arguments: [ pure(tx, vecU64, `vector<u64>`) ], }) }

export function sum( tx: Transaction, vecU64: Array<bigint | TransactionArgument> | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::sum`, arguments: [ pure(tx, vecU64, `vector<u64>`) ], }) }

export function lockMultiplierLowerBound( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::lock_multiplier_lower_bound`, arguments: [ ], }) }

export function totalRewardsAccumulatedPerShareScalingFactor( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::total_rewards_accumulated_per_share_scaling_factor`, arguments: [ ], }) }

export interface CalcNumberOfEmissionsFromTimeTnToTmArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument; u644: bigint | TransactionArgument }

export function calcNumberOfEmissionsFromTimeTnToTm( tx: Transaction, args: CalcNumberOfEmissionsFromTimeTnToTmArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::calc_number_of_emissions_from_time_tn_to_tm`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`), pure(tx, args.u644, `u64`) ], }) }

export interface CalcRemainingNumberOfEmissionsArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function calcRemainingNumberOfEmissions( tx: Transaction, args: CalcRemainingNumberOfEmissionsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::calc_remaining_number_of_emissions`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface CalcLockMultiplierArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument; u643: bigint | TransactionArgument; u644: bigint | TransactionArgument }

export function calcLockMultiplier( tx: Transaction, args: CalcLockMultiplierArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::calc_lock_multiplier`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`), pure(tx, args.u643, `u64`), pure(tx, args.u644, `u64`) ], }) }

export interface CalcMultiplierStakedAmountArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function calcMultiplierStakedAmount( tx: Transaction, args: CalcMultiplierStakedAmountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::calc_multiplier_staked_amount`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface MultiplyArgs { u641: bigint | TransactionArgument; u642: bigint | TransactionArgument }

export function multiply( tx: Transaction, args: MultiplyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::multiply`, arguments: [ pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`) ], }) }

export interface MultiplyU128Args { u128: bigint | TransactionArgument; u64: bigint | TransactionArgument }

export function multiplyU128( tx: Transaction, args: MultiplyU128Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::multiply_u128`, arguments: [ pure(tx, args.u128, `u128`), pure(tx, args.u64, `u64`) ], }) }

export interface DivideArgs { u128: bigint | TransactionArgument; u64: bigint | TransactionArgument }

export function divide( tx: Transaction, args: DivideArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::divide`, arguments: [ pure(tx, args.u128, `u128`), pure(tx, args.u64, `u64`) ], }) }

export interface DivideU128Args { u128: bigint | TransactionArgument; u64: bigint | TransactionArgument }

export function divideU128( tx: Transaction, args: DivideU128Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::divide_u128`, arguments: [ pure(tx, args.u128, `u128`), pure(tx, args.u64, `u64`) ], }) }

export interface DivideIntoU128Args { u128: bigint | TransactionArgument; u64: bigint | TransactionArgument }

export function divideIntoU128( tx: Transaction, args: DivideIntoU128Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::utils::divide_into_u128`, arguments: [ pure(tx, args.u128, `u128`), pure(tx, args.u64, `u64`) ], }) }
