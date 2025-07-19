import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {ID} from "../../sui/object/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface AccountBalanceArgs { pool: TransactionObjectInput; accountCap: TransactionObjectInput }

export function accountBalance( tx: Transaction, typeArgs: [string, string], args: AccountBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::account_balance`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.accountCap) ], }) }

export interface BatchCancelOrderArgs { pool: TransactionObjectInput; orderIds: Array<bigint | TransactionArgument> | TransactionArgument; accountCap: TransactionObjectInput }

export function batchCancelOrder( tx: Transaction, typeArgs: [string, string], args: BatchCancelOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::batch_cancel_order`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.orderIds, `vector<u64>`), obj(tx, args.accountCap) ], }) }

export interface CancelAllOrdersArgs { pool: TransactionObjectInput; accountCap: TransactionObjectInput }

export function cancelAllOrders( tx: Transaction, typeArgs: [string, string], args: CancelAllOrdersArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::cancel_all_orders`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.accountCap) ], }) }

export interface CancelOrderArgs { pool: TransactionObjectInput; orderId: bigint | TransactionArgument; accountCap: TransactionObjectInput }

export function cancelOrder( tx: Transaction, typeArgs: [string, string], args: CancelOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::cancel_order`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.orderId, `u64`), obj(tx, args.accountCap) ], }) }

export function createAccount( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::create_account`, arguments: [ ], }) }

export interface CreatePoolArgs { tickSize: bigint | TransactionArgument; lotSize: bigint | TransactionArgument; creationFee: TransactionObjectInput }

export function createPool( tx: Transaction, typeArgs: [string, string], args: CreatePoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::create_pool`, typeArguments: typeArgs, arguments: [ pure(tx, args.tickSize, `u64`), pure(tx, args.lotSize, `u64`), obj(tx, args.creationFee) ], }) }

export interface DepositBaseArgs { pool: TransactionObjectInput; coin: TransactionObjectInput; accountCap: TransactionObjectInput }

export function depositBase( tx: Transaction, typeArgs: [string, string], args: DepositBaseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::deposit_base`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.coin), obj(tx, args.accountCap) ], }) }

export interface DepositQuoteArgs { pool: TransactionObjectInput; coin: TransactionObjectInput; accountCap: TransactionObjectInput }

export function depositQuote( tx: Transaction, typeArgs: [string, string], args: DepositQuoteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::deposit_quote`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.coin), obj(tx, args.accountCap) ], }) }

export function destroyEmptyLevel( tx: Transaction, level: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::destroy_empty_level`, arguments: [ obj(tx, level) ], }) }

export interface EmitOrderCanceledArgs { poolId: string | TransactionArgument; order: TransactionObjectInput }

export function emitOrderCanceled( tx: Transaction, typeArgs: [string, string], args: EmitOrderCanceledArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::emit_order_canceled`, typeArguments: typeArgs, arguments: [ pure(tx, args.poolId, `${ID.$typeName}`), obj(tx, args.order) ], }) }

export interface EmitOrderFilledArgs { poolId: string | TransactionArgument; order: TransactionObjectInput; baseAssetQuantityFilled: bigint | TransactionArgument; takerCommission: bigint | TransactionArgument; makerRebates: bigint | TransactionArgument }

export function emitOrderFilled( tx: Transaction, typeArgs: [string, string], args: EmitOrderFilledArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::emit_order_filled`, typeArguments: typeArgs, arguments: [ pure(tx, args.poolId, `${ID.$typeName}`), obj(tx, args.order), pure(tx, args.baseAssetQuantityFilled, `u64`), pure(tx, args.takerCommission, `u64`), pure(tx, args.makerRebates, `u64`) ], }) }

export interface GetLevel2BookStatusArgs { openOrders: TransactionObjectInput; price: bigint | TransactionArgument; timeStamp: bigint | TransactionArgument }

export function getLevel2BookStatus( tx: Transaction, args: GetLevel2BookStatusArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::get_level2_book_status`, arguments: [ obj(tx, args.openOrders), pure(tx, args.price, `u64`), pure(tx, args.timeStamp, `u64`) ], }) }

export interface GetLevel2BookStatusAskSideArgs { pool: TransactionObjectInput; priceLow: bigint | TransactionArgument; priceHigh: bigint | TransactionArgument; clock: TransactionObjectInput }

export function getLevel2BookStatusAskSide( tx: Transaction, typeArgs: [string, string], args: GetLevel2BookStatusAskSideArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::get_level2_book_status_ask_side`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.priceLow, `u64`), pure(tx, args.priceHigh, `u64`), obj(tx, args.clock) ], }) }

export interface GetLevel2BookStatusBidSideArgs { pool: TransactionObjectInput; priceLow: bigint | TransactionArgument; priceHigh: bigint | TransactionArgument; clock: TransactionObjectInput }

export function getLevel2BookStatusBidSide( tx: Transaction, typeArgs: [string, string], args: GetLevel2BookStatusBidSideArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::get_level2_book_status_bid_side`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.priceLow, `u64`), pure(tx, args.priceHigh, `u64`), obj(tx, args.clock) ], }) }

export function getMarketPrice( tx: Transaction, typeArgs: [string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::get_market_price`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export interface GetOrderStatusArgs { pool: TransactionObjectInput; orderId: bigint | TransactionArgument; accountCap: TransactionObjectInput }

export function getOrderStatus( tx: Transaction, typeArgs: [string, string], args: GetOrderStatusArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::get_order_status`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.orderId, `u64`), obj(tx, args.accountCap) ], }) }

export interface InjectLimitOrderArgs { pool: TransactionObjectInput; price: bigint | TransactionArgument; quantity: bigint | TransactionArgument; isBid: boolean | TransactionArgument; expireTimestamp: bigint | TransactionArgument; accountCap: TransactionObjectInput }

export function injectLimitOrder( tx: Transaction, typeArgs: [string, string], args: InjectLimitOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::inject_limit_order`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.price, `u64`), pure(tx, args.quantity, `u64`), pure(tx, args.isBid, `bool`), pure(tx, args.expireTimestamp, `u64`), obj(tx, args.accountCap) ], }) }

export interface ListOpenOrdersArgs { pool: TransactionObjectInput; accountCap: TransactionObjectInput }

export function listOpenOrders( tx: Transaction, typeArgs: [string, string], args: ListOpenOrdersArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::list_open_orders`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.accountCap) ], }) }

export interface MatchAskArgs { pool: TransactionObjectInput; priceLimit: bigint | TransactionArgument; currentTimestamp: bigint | TransactionArgument; baseBalance: TransactionObjectInput }

export function matchAsk( tx: Transaction, typeArgs: [string, string], args: MatchAskArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::match_ask`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.priceLimit, `u64`), pure(tx, args.currentTimestamp, `u64`), obj(tx, args.baseBalance) ], }) }

export interface MatchBidArgs { pool: TransactionObjectInput; quantity: bigint | TransactionArgument; priceLimit: bigint | TransactionArgument; currentTimestamp: bigint | TransactionArgument; quoteBalance: TransactionObjectInput }

export function matchBid( tx: Transaction, typeArgs: [string, string], args: MatchBidArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::match_bid`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.quantity, `u64`), pure(tx, args.priceLimit, `u64`), pure(tx, args.currentTimestamp, `u64`), obj(tx, args.quoteBalance) ], }) }

export interface MatchBidWithQuoteQuantityArgs { pool: TransactionObjectInput; quantity: bigint | TransactionArgument; priceLimit: bigint | TransactionArgument; currentTimestamp: bigint | TransactionArgument; quoteBalance: TransactionObjectInput }

export function matchBidWithQuoteQuantity( tx: Transaction, typeArgs: [string, string], args: MatchBidWithQuoteQuantityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::match_bid_with_quote_quantity`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.quantity, `u64`), pure(tx, args.priceLimit, `u64`), pure(tx, args.currentTimestamp, `u64`), obj(tx, args.quoteBalance) ], }) }

export function orderIsBid( tx: Transaction, orderId: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::order_is_bid`, arguments: [ pure(tx, orderId, `u64`) ], }) }

export interface PlaceLimitOrderArgs { pool: TransactionObjectInput; price: bigint | TransactionArgument; quantity: bigint | TransactionArgument; isBid: boolean | TransactionArgument; expireTimestamp: bigint | TransactionArgument; restriction: number | TransactionArgument; clock: TransactionObjectInput; accountCap: TransactionObjectInput }

export function placeLimitOrder( tx: Transaction, typeArgs: [string, string], args: PlaceLimitOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::place_limit_order`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.price, `u64`), pure(tx, args.quantity, `u64`), pure(tx, args.isBid, `bool`), pure(tx, args.expireTimestamp, `u64`), pure(tx, args.restriction, `u8`), obj(tx, args.clock), obj(tx, args.accountCap) ], }) }

export interface PlaceMarketOrderArgs { pool: TransactionObjectInput; quantity: bigint | TransactionArgument; isBid: boolean | TransactionArgument; baseCoin: TransactionObjectInput; quoteCoin: TransactionObjectInput; clock: TransactionObjectInput }

export function placeMarketOrder( tx: Transaction, typeArgs: [string, string], args: PlaceMarketOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::place_market_order`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.quantity, `u64`), pure(tx, args.isBid, `bool`), obj(tx, args.baseCoin), obj(tx, args.quoteCoin), obj(tx, args.clock) ], }) }

export interface RemoveOrderArgs { openOrders: TransactionObjectInput; usrOpenOrders: TransactionObjectInput; tickIndex: bigint | TransactionArgument; orderId: bigint | TransactionArgument; user: string | TransactionArgument }

export function removeOrder( tx: Transaction, args: RemoveOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::remove_order`, arguments: [ obj(tx, args.openOrders), obj(tx, args.usrOpenOrders), pure(tx, args.tickIndex, `u64`), pure(tx, args.orderId, `u64`), pure(tx, args.user, `${ID.$typeName}`) ], }) }

export interface SwapExactBaseForQuoteArgs { pool: TransactionObjectInput; quantity: bigint | TransactionArgument; baseCoin: TransactionObjectInput; quoteCoin: TransactionObjectInput; clock: TransactionObjectInput }

export function swapExactBaseForQuote( tx: Transaction, typeArgs: [string, string], args: SwapExactBaseForQuoteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::swap_exact_base_for_quote`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.quantity, `u64`), obj(tx, args.baseCoin), obj(tx, args.quoteCoin), obj(tx, args.clock) ], }) }

export interface SwapExactQuoteForBaseArgs { pool: TransactionObjectInput; quantity: bigint | TransactionArgument; clock: TransactionObjectInput; quoteCoin: TransactionObjectInput }

export function swapExactQuoteForBase( tx: Transaction, typeArgs: [string, string], args: SwapExactQuoteForBaseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::swap_exact_quote_for_base`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.quantity, `u64`), obj(tx, args.clock), obj(tx, args.quoteCoin) ], }) }

export interface WithdrawBaseArgs { pool: TransactionObjectInput; quantity: bigint | TransactionArgument; accountCap: TransactionObjectInput }

export function withdrawBase( tx: Transaction, typeArgs: [string, string], args: WithdrawBaseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::withdraw_base`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.quantity, `u64`), obj(tx, args.accountCap) ], }) }

export interface WithdrawQuoteArgs { pool: TransactionObjectInput; quantity: bigint | TransactionArgument; accountCap: TransactionObjectInput }

export function withdrawQuote( tx: Transaction, typeArgs: [string, string], args: WithdrawQuoteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob::withdraw_quote`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.quantity, `u64`), obj(tx, args.accountCap) ], }) }
