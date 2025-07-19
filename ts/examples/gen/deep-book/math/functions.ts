import {PUBLISHED_AT} from "..";
import {pure} from "../../_framework/util";
import {Transaction, TransactionArgument} from "@mysten/sui/transactions";

export interface MulArgs { x: bigint | TransactionArgument; y: bigint | TransactionArgument }

export function mul( tx: Transaction, args: MulArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul`, arguments: [ pure(tx, args.x, `u64`), pure(tx, args.y, `u64`) ], }) }

export function countLeadingZeros( tx: Transaction, x: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::count_leading_zeros`, arguments: [ pure(tx, x, `u128`) ], }) }

export interface DivRoundArgs { x: bigint | TransactionArgument; y: bigint | TransactionArgument }

export function divRound( tx: Transaction, args: DivRoundArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::div_round`, arguments: [ pure(tx, args.x, `u64`), pure(tx, args.y, `u64`) ], }) }

export interface MulRoundArgs { x: bigint | TransactionArgument; y: bigint | TransactionArgument }

export function mulRound( tx: Transaction, args: MulRoundArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::mul_round`, arguments: [ pure(tx, args.x, `u64`), pure(tx, args.y, `u64`) ], }) }

export interface UnsafeDivArgs { x: bigint | TransactionArgument; y: bigint | TransactionArgument }

export function unsafeDiv( tx: Transaction, args: UnsafeDivArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::unsafe_div`, arguments: [ pure(tx, args.x, `u64`), pure(tx, args.y, `u64`) ], }) }

export interface UnsafeDivRoundArgs { x: bigint | TransactionArgument; y: bigint | TransactionArgument }

export function unsafeDivRound( tx: Transaction, args: UnsafeDivRoundArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::unsafe_div_round`, arguments: [ pure(tx, args.x, `u64`), pure(tx, args.y, `u64`) ], }) }

export interface UnsafeMulArgs { x: bigint | TransactionArgument; y: bigint | TransactionArgument }

export function unsafeMul( tx: Transaction, args: UnsafeMulArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::unsafe_mul`, arguments: [ pure(tx, args.x, `u64`), pure(tx, args.y, `u64`) ], }) }

export interface UnsafeMulRoundArgs { x: bigint | TransactionArgument; y: bigint | TransactionArgument }

export function unsafeMulRound( tx: Transaction, args: UnsafeMulRoundArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::math::unsafe_mul_round`, arguments: [ pure(tx, args.x, `u64`), pure(tx, args.y, `u64`) ], }) }
