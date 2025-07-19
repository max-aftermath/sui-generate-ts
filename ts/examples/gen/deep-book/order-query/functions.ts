import {PUBLISHED_AT} from "..";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function orderId( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_query::order_id`, arguments: [ obj(tx, order) ], }) }

export function tickLevel( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_query::tick_level`, arguments: [ obj(tx, order) ], }) }

export function hasNextPage( tx: Transaction, page: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_query::has_next_page`, arguments: [ obj(tx, page) ], }) }

export interface IterAsksArgs { pool: TransactionObjectInput; startTickLevel: (bigint | TransactionArgument | TransactionArgument | null); startOrderId: (bigint | TransactionArgument | TransactionArgument | null); minExpireTimestamp: (bigint | TransactionArgument | TransactionArgument | null); maxId: (bigint | TransactionArgument | TransactionArgument | null); ascending: boolean | TransactionArgument }

export function iterAsks( tx: Transaction, typeArgs: [string, string], args: IterAsksArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_query::iter_asks`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.startTickLevel, `${Option.$typeName}<u64>`), pure(tx, args.startOrderId, `${Option.$typeName}<u64>`), pure(tx, args.minExpireTimestamp, `${Option.$typeName}<u64>`), pure(tx, args.maxId, `${Option.$typeName}<u64>`), pure(tx, args.ascending, `bool`) ], }) }

export interface IterBidsArgs { pool: TransactionObjectInput; startTickLevel: (bigint | TransactionArgument | TransactionArgument | null); startOrderId: (bigint | TransactionArgument | TransactionArgument | null); minExpireTimestamp: (bigint | TransactionArgument | TransactionArgument | null); maxId: (bigint | TransactionArgument | TransactionArgument | null); ascending: boolean | TransactionArgument }

export function iterBids( tx: Transaction, typeArgs: [string, string], args: IterBidsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_query::iter_bids`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.startTickLevel, `${Option.$typeName}<u64>`), pure(tx, args.startOrderId, `${Option.$typeName}<u64>`), pure(tx, args.minExpireTimestamp, `${Option.$typeName}<u64>`), pure(tx, args.maxId, `${Option.$typeName}<u64>`), pure(tx, args.ascending, `bool`) ], }) }

export interface IterTicksInternalArgs { ticks: TransactionObjectInput; startTickLevel: (bigint | TransactionArgument | TransactionArgument | null); startOrderId: (bigint | TransactionArgument | TransactionArgument | null); minExpireTimestamp: (bigint | TransactionArgument | TransactionArgument | null); maxId: (bigint | TransactionArgument | TransactionArgument | null); ascending: boolean | TransactionArgument }

export function iterTicksInternal( tx: Transaction, args: IterTicksInternalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_query::iter_ticks_internal`, arguments: [ obj(tx, args.ticks), pure(tx, args.startTickLevel, `${Option.$typeName}<u64>`), pure(tx, args.startOrderId, `${Option.$typeName}<u64>`), pure(tx, args.minExpireTimestamp, `${Option.$typeName}<u64>`), pure(tx, args.maxId, `${Option.$typeName}<u64>`), pure(tx, args.ascending, `bool`) ], }) }

export function nextOrderId( tx: Transaction, page: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_query::next_order_id`, arguments: [ obj(tx, page) ], }) }

export function nextTickLevel( tx: Transaction, page: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_query::next_tick_level`, arguments: [ obj(tx, page) ], }) }

export function orders( tx: Transaction, page: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::order_query::orders`, arguments: [ obj(tx, page) ], }) }
