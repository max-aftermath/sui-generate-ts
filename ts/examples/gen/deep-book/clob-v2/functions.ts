import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {ID} from "../../sui/object/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function owner( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::owner`, arguments: [ obj(tx, order) ], }) }

export interface AccountBalanceArgs { pool: TransactionObjectInput; accountCap: TransactionObjectInput }

export function accountBalance( tx: Transaction, typeArgs: [string, string], args: AccountBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::account_balance`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.accountCap) ], }) }

export function quantity( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::quantity`, arguments: [ obj(tx, order) ], }) }

export interface BatchCancelOrderArgs { pool: TransactionObjectInput; orderIds: Array<bigint | TransactionArgument> | TransactionArgument; accountCap: TransactionObjectInput }

export function batchCancelOrder( tx: Transaction, typeArgs: [string, string], args: BatchCancelOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::batch_cancel_order`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.orderIds, `vector<u64>`), obj(tx, args.accountCap) ], }) }

export interface CancelAllOrdersArgs { pool: TransactionObjectInput; accountCap: TransactionObjectInput }

export function cancelAllOrders( tx: Transaction, typeArgs: [string, string], args: CancelAllOrdersArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::cancel_all_orders`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.accountCap) ], }) }

export interface CancelOrderArgs { pool: TransactionObjectInput; orderId: bigint | TransactionArgument; accountCap: TransactionObjectInput }

export function cancelOrder( tx: Transaction, typeArgs: [string, string], args: CancelOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::cancel_order`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.orderId, `u64`), obj(tx, args.accountCap) ], }) }

export function orderId( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::order_id`, arguments: [ obj(tx, order) ], }) }

export function createAccount( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::create_account`, arguments: [ ], }) }

export interface CreatePoolArgs { tickSize: bigint | TransactionArgument; lotSize: bigint | TransactionArgument; creationFee: TransactionObjectInput }

export function createPool( tx: Transaction, typeArgs: [string, string], args: CreatePoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::create_pool`, typeArguments: typeArgs, arguments: [ pure(tx, args.tickSize, `u64`), pure(tx, args.lotSize, `u64`), obj(tx, args.creationFee) ], }) }

export interface DepositBaseArgs { pool: TransactionObjectInput; coin: TransactionObjectInput; accountCap: TransactionObjectInput }

export function depositBase( tx: Transaction, typeArgs: [string, string], args: DepositBaseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::deposit_base`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.coin), obj(tx, args.accountCap) ], }) }

export interface DepositQuoteArgs { pool: TransactionObjectInput; coin: TransactionObjectInput; accountCap: TransactionObjectInput }

export function depositQuote( tx: Transaction, typeArgs: [string, string], args: DepositQuoteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::deposit_quote`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.coin), obj(tx, args.accountCap) ], }) }

export function destroyEmptyLevel( tx: Transaction, level: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::destroy_empty_level`, arguments: [ obj(tx, level) ], }) }

export interface EmitOrderCanceledArgs { poolId: string | TransactionArgument; order: TransactionObjectInput }

export function emitOrderCanceled( tx: Transaction, typeArgs: [string, string], args: EmitOrderCanceledArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::emit_order_canceled`, typeArguments: typeArgs, arguments: [ pure(tx, args.poolId, `${ID.$typeName}`), obj(tx, args.order) ], }) }

export interface EmitOrderFilledArgs { poolId: string | TransactionArgument; takerClientId: bigint | TransactionArgument; takerAddress: string | TransactionArgument; order: TransactionObjectInput; baseAssetQuantityFilled: bigint | TransactionArgument; takerCommission: bigint | TransactionArgument; makerRebates: bigint | TransactionArgument }

export function emitOrderFilled( tx: Transaction, typeArgs: [string, string], args: EmitOrderFilledArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::emit_order_filled`, typeArguments: typeArgs, arguments: [ pure(tx, args.poolId, `${ID.$typeName}`), pure(tx, args.takerClientId, `u64`), pure(tx, args.takerAddress, `address`), obj(tx, args.order), pure(tx, args.baseAssetQuantityFilled, `u64`), pure(tx, args.takerCommission, `u64`), pure(tx, args.makerRebates, `u64`) ], }) }

export interface GetLevel2BookStatusArgs { openOrders: TransactionObjectInput; price: bigint | TransactionArgument; timeStamp: bigint | TransactionArgument }

export function getLevel2BookStatus( tx: Transaction, args: GetLevel2BookStatusArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::get_level2_book_status`, arguments: [ obj(tx, args.openOrders), pure(tx, args.price, `u64`), pure(tx, args.timeStamp, `u64`) ], }) }

export function openOrders( tx: Transaction, tickLevel: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::open_orders`, arguments: [ obj(tx, tickLevel) ], }) }

export interface GetLevel2BookStatusAskSideArgs { pool: TransactionObjectInput; priceLow: bigint | TransactionArgument; priceHigh: bigint | TransactionArgument; clock: TransactionObjectInput }

export function getLevel2BookStatusAskSide( tx: Transaction, typeArgs: [string, string], args: GetLevel2BookStatusAskSideArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::get_level2_book_status_ask_side`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.priceLow, `u64`), pure(tx, args.priceHigh, `u64`), obj(tx, args.clock) ], }) }

export interface GetLevel2BookStatusBidSideArgs { pool: TransactionObjectInput; priceLow: bigint | TransactionArgument; priceHigh: bigint | TransactionArgument; clock: TransactionObjectInput }

export function getLevel2BookStatusBidSide( tx: Transaction, typeArgs: [string, string], args: GetLevel2BookStatusBidSideArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::get_level2_book_status_bid_side`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.priceLow, `u64`), pure(tx, args.priceHigh, `u64`), obj(tx, args.clock) ], }) }

export function getMarketPrice( tx: Transaction, typeArgs: [string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::get_market_price`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export interface GetOrderStatusArgs { pool: TransactionObjectInput; orderId: bigint | TransactionArgument; accountCap: TransactionObjectInput }

export function getOrderStatus( tx: Transaction, typeArgs: [string, string], args: GetOrderStatusArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::get_order_status`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.orderId, `u64`), obj(tx, args.accountCap) ], }) }

export interface InjectLimitOrderArgs { pool: TransactionObjectInput; clientOrderId: bigint | TransactionArgument; price: bigint | TransactionArgument; originalQuantity: bigint | TransactionArgument; quantity: bigint | TransactionArgument; isBid: boolean | TransactionArgument; selfMatchingPrevention: number | TransactionArgument; expireTimestamp: bigint | TransactionArgument; accountCap: TransactionObjectInput }

export function injectLimitOrder( tx: Transaction, typeArgs: [string, string], args: InjectLimitOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::inject_limit_order`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.clientOrderId, `u64`), pure(tx, args.price, `u64`), pure(tx, args.originalQuantity, `u64`), pure(tx, args.quantity, `u64`), pure(tx, args.isBid, `bool`), pure(tx, args.selfMatchingPrevention, `u8`), pure(tx, args.expireTimestamp, `u64`), obj(tx, args.accountCap) ], }) }

export function isBid( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::is_bid`, arguments: [ obj(tx, order) ], }) }

export function expireTimestamp( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::expire_timestamp`, arguments: [ obj(tx, order) ], }) }

export interface ListOpenOrdersArgs { pool: TransactionObjectInput; accountCap: TransactionObjectInput }

export function listOpenOrders( tx: Transaction, typeArgs: [string, string], args: ListOpenOrdersArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::list_open_orders`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.accountCap) ], }) }

export interface MatchAskArgs { pool: TransactionObjectInput; accountCap: TransactionObjectInput; clientOrderId: bigint | TransactionArgument; priceLimit: bigint | TransactionArgument; currentTimestamp: bigint | TransactionArgument; baseBalance: TransactionObjectInput; computeMetadata: boolean | TransactionArgument }

export function matchAsk( tx: Transaction, typeArgs: [string, string], args: MatchAskArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::match_ask`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.accountCap), pure(tx, args.clientOrderId, `u64`), pure(tx, args.priceLimit, `u64`), pure(tx, args.currentTimestamp, `u64`), obj(tx, args.baseBalance), pure(tx, args.computeMetadata, `bool`) ], }) }

export interface MatchBidArgs { pool: TransactionObjectInput; accountCap: TransactionObjectInput; clientOrderId: bigint | TransactionArgument; quantity: bigint | TransactionArgument; priceLimit: bigint | TransactionArgument; currentTimestamp: bigint | TransactionArgument; quoteBalance: TransactionObjectInput; computeMetadata: boolean | TransactionArgument }

export function matchBid( tx: Transaction, typeArgs: [string, string], args: MatchBidArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::match_bid`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.accountCap), pure(tx, args.clientOrderId, `u64`), pure(tx, args.quantity, `u64`), pure(tx, args.priceLimit, `u64`), pure(tx, args.currentTimestamp, `u64`), obj(tx, args.quoteBalance), pure(tx, args.computeMetadata, `bool`) ], }) }

export interface MatchBidWithQuoteQuantityArgs { pool: TransactionObjectInput; accountCap: TransactionObjectInput; clientOrderId: bigint | TransactionArgument; quantity: bigint | TransactionArgument; priceLimit: bigint | TransactionArgument; currentTimestamp: bigint | TransactionArgument; quoteBalance: TransactionObjectInput; computeMetadata: boolean | TransactionArgument }

export function matchBidWithQuoteQuantity( tx: Transaction, typeArgs: [string, string], args: MatchBidWithQuoteQuantityArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::match_bid_with_quote_quantity`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.accountCap), pure(tx, args.clientOrderId, `u64`), pure(tx, args.quantity, `u64`), pure(tx, args.priceLimit, `u64`), pure(tx, args.currentTimestamp, `u64`), obj(tx, args.quoteBalance), pure(tx, args.computeMetadata, `bool`) ], }) }

export function orderIsBid( tx: Transaction, orderId: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::order_is_bid`, arguments: [ pure(tx, orderId, `u64`) ], }) }

export interface PlaceLimitOrderArgs { pool: TransactionObjectInput; clientOrderId: bigint | TransactionArgument; price: bigint | TransactionArgument; quantity: bigint | TransactionArgument; selfMatchingPrevention: number | TransactionArgument; isBid: boolean | TransactionArgument; expireTimestamp: bigint | TransactionArgument; restriction: number | TransactionArgument; clock: TransactionObjectInput; accountCap: TransactionObjectInput }

export function placeLimitOrder( tx: Transaction, typeArgs: [string, string], args: PlaceLimitOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::place_limit_order`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.clientOrderId, `u64`), pure(tx, args.price, `u64`), pure(tx, args.quantity, `u64`), pure(tx, args.selfMatchingPrevention, `u8`), pure(tx, args.isBid, `bool`), pure(tx, args.expireTimestamp, `u64`), pure(tx, args.restriction, `u8`), obj(tx, args.clock), obj(tx, args.accountCap) ], }) }

export interface PlaceMarketOrderArgs { pool: TransactionObjectInput; accountCap: TransactionObjectInput; clientOrderId: bigint | TransactionArgument; quantity: bigint | TransactionArgument; isBid: boolean | TransactionArgument; baseCoin: TransactionObjectInput; quoteCoin: TransactionObjectInput; clock: TransactionObjectInput }

export function placeMarketOrder( tx: Transaction, typeArgs: [string, string], args: PlaceMarketOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::place_market_order`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.accountCap), pure(tx, args.clientOrderId, `u64`), pure(tx, args.quantity, `u64`), pure(tx, args.isBid, `bool`), obj(tx, args.baseCoin), obj(tx, args.quoteCoin), obj(tx, args.clock) ], }) }

export interface RemoveOrderArgs { openOrders: TransactionObjectInput; usrOpenOrders: TransactionObjectInput; tickIndex: bigint | TransactionArgument; orderId: bigint | TransactionArgument; owner: string | TransactionArgument }

export function removeOrder( tx: Transaction, args: RemoveOrderArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::remove_order`, arguments: [ obj(tx, args.openOrders), obj(tx, args.usrOpenOrders), pure(tx, args.tickIndex, `u64`), pure(tx, args.orderId, `u64`), pure(tx, args.owner, `address`) ], }) }

export function usrOpenOrders( tx: Transaction, typeArgs: [string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::usr_open_orders`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export interface SwapExactBaseForQuoteArgs { pool: TransactionObjectInput; clientOrderId: bigint | TransactionArgument; accountCap: TransactionObjectInput; quantity: bigint | TransactionArgument; baseCoin: TransactionObjectInput; quoteCoin: TransactionObjectInput; clock: TransactionObjectInput }

export function swapExactBaseForQuote( tx: Transaction, typeArgs: [string, string], args: SwapExactBaseForQuoteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::swap_exact_base_for_quote`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.clientOrderId, `u64`), obj(tx, args.accountCap), pure(tx, args.quantity, `u64`), obj(tx, args.baseCoin), obj(tx, args.quoteCoin), obj(tx, args.clock) ], }) }

export interface SwapExactQuoteForBaseArgs { pool: TransactionObjectInput; clientOrderId: bigint | TransactionArgument; accountCap: TransactionObjectInput; quantity: bigint | TransactionArgument; clock: TransactionObjectInput; quoteCoin: TransactionObjectInput }

export function swapExactQuoteForBase( tx: Transaction, typeArgs: [string, string], args: SwapExactQuoteForBaseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::swap_exact_quote_for_base`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.clientOrderId, `u64`), obj(tx, args.accountCap), pure(tx, args.quantity, `u64`), obj(tx, args.clock), obj(tx, args.quoteCoin) ], }) }

export interface WithdrawBaseArgs { pool: TransactionObjectInput; quantity: bigint | TransactionArgument; accountCap: TransactionObjectInput }

export function withdrawBase( tx: Transaction, typeArgs: [string, string], args: WithdrawBaseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::withdraw_base`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.quantity, `u64`), obj(tx, args.accountCap) ], }) }

export interface WithdrawQuoteArgs { pool: TransactionObjectInput; quantity: bigint | TransactionArgument; accountCap: TransactionObjectInput }

export function withdrawQuote( tx: Transaction, typeArgs: [string, string], args: WithdrawQuoteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::withdraw_quote`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.quantity, `u64`), obj(tx, args.accountCap) ], }) }

export function asks( tx: Transaction, typeArgs: [string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::asks`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function bids( tx: Transaction, typeArgs: [string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::bids`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function makerRebateRate( tx: Transaction, typeArgs: [string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::maker_rebate_rate`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function takerFeeRate( tx: Transaction, typeArgs: [string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::taker_fee_rate`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function tickSize( tx: Transaction, typeArgs: [string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::tick_size`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export interface CleanUpExpiredOrdersArgs { pool: TransactionObjectInput; clock: TransactionObjectInput; orderIds: Array<bigint | TransactionArgument> | TransactionArgument; orderOwners: Array<string | TransactionArgument> | TransactionArgument }

export function cleanUpExpiredOrders( tx: Transaction, typeArgs: [string, string], args: CleanUpExpiredOrdersArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::clean_up_expired_orders`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.clock), pure(tx, args.orderIds, `vector<u64>`), pure(tx, args.orderOwners, `vector<address>`) ], }) }

export function cloneOrder( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::clone_order`, arguments: [ obj(tx, order) ], }) }

export interface CreateCustomizedPoolArgs { tickSize: bigint | TransactionArgument; lotSize: bigint | TransactionArgument; takerFeeRate: bigint | TransactionArgument; makerRebateRate: bigint | TransactionArgument; creationFee: TransactionObjectInput }

export function createCustomizedPool( tx: Transaction, typeArgs: [string, string], args: CreateCustomizedPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::create_customized_pool`, typeArguments: typeArgs, arguments: [ pure(tx, args.tickSize, `u64`), pure(tx, args.lotSize, `u64`), pure(tx, args.takerFeeRate, `u64`), pure(tx, args.makerRebateRate, `u64`), obj(tx, args.creationFee) ], }) }

export interface CreateCustomizedPoolV2Args { tickSize: bigint | TransactionArgument; lotSize: bigint | TransactionArgument; takerFeeRate: bigint | TransactionArgument; makerRebateRate: bigint | TransactionArgument; creationFee: TransactionObjectInput }

export function createCustomizedPoolV2( tx: Transaction, typeArgs: [string, string], args: CreateCustomizedPoolV2Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::create_customized_pool_v2`, typeArguments: typeArgs, arguments: [ pure(tx, args.tickSize, `u64`), pure(tx, args.lotSize, `u64`), pure(tx, args.takerFeeRate, `u64`), pure(tx, args.makerRebateRate, `u64`), obj(tx, args.creationFee) ], }) }

export interface CreateCustomizedPoolWithReturnArgs { tickSize: bigint | TransactionArgument; lotSize: bigint | TransactionArgument; takerFeeRate: bigint | TransactionArgument; makerRebateRate: bigint | TransactionArgument; creationFee: TransactionObjectInput }

export function createCustomizedPoolWithReturn( tx: Transaction, typeArgs: [string, string], args: CreateCustomizedPoolWithReturnArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::create_customized_pool_with_return`, typeArguments: typeArgs, arguments: [ pure(tx, args.tickSize, `u64`), pure(tx, args.lotSize, `u64`), pure(tx, args.takerFeeRate, `u64`), pure(tx, args.makerRebateRate, `u64`), obj(tx, args.creationFee) ], }) }

export interface CreatePool_Args { takerFeeRate: bigint | TransactionArgument; makerRebateRate: bigint | TransactionArgument; tickSize: bigint | TransactionArgument; lotSize: bigint | TransactionArgument; creationFee: TransactionObjectInput }

export function createPool_( tx: Transaction, typeArgs: [string, string], args: CreatePool_Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::create_pool_`, typeArguments: typeArgs, arguments: [ pure(tx, args.takerFeeRate, `u64`), pure(tx, args.makerRebateRate, `u64`), pure(tx, args.tickSize, `u64`), pure(tx, args.lotSize, `u64`), obj(tx, args.creationFee) ], }) }

export interface CreatePoolWithReturnArgs { tickSize: bigint | TransactionArgument; lotSize: bigint | TransactionArgument; creationFee: TransactionObjectInput }

export function createPoolWithReturn( tx: Transaction, typeArgs: [string, string], args: CreatePoolWithReturnArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::create_pool_with_return`, typeArguments: typeArgs, arguments: [ pure(tx, args.tickSize, `u64`), pure(tx, args.lotSize, `u64`), obj(tx, args.creationFee) ], }) }

export interface CreatePoolWithReturn_Args { takerFeeRate: bigint | TransactionArgument; makerRebateRate: bigint | TransactionArgument; tickSize: bigint | TransactionArgument; lotSize: bigint | TransactionArgument; creationFee: TransactionObjectInput }

export function createPoolWithReturn_( tx: Transaction, typeArgs: [string, string], args: CreatePoolWithReturn_Args ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::create_pool_with_return_`, typeArguments: typeArgs, arguments: [ pure(tx, args.takerFeeRate, `u64`), pure(tx, args.makerRebateRate, `u64`), pure(tx, args.tickSize, `u64`), pure(tx, args.lotSize, `u64`), obj(tx, args.creationFee) ], }) }

export function deletePoolOwnerCap( tx: Transaction, poolOwnerCap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::delete_pool_owner_cap`, arguments: [ obj(tx, poolOwnerCap) ], }) }

export function originalQuantity( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::original_quantity`, arguments: [ obj(tx, order) ], }) }

export interface MatchedOrderMetadataArgs { poolId: string | TransactionArgument; takerAddress: string | TransactionArgument; order: TransactionObjectInput; baseAssetQuantityFilled: bigint | TransactionArgument; takerCommission: bigint | TransactionArgument; makerRebates: bigint | TransactionArgument }

export function matchedOrderMetadata( tx: Transaction, typeArgs: [string, string], args: MatchedOrderMetadataArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::matched_order_metadata`, typeArguments: typeArgs, arguments: [ pure(tx, args.poolId, `${ID.$typeName}`), pure(tx, args.takerAddress, `address`), obj(tx, args.order), pure(tx, args.baseAssetQuantityFilled, `u64`), pure(tx, args.takerCommission, `u64`), pure(tx, args.makerRebates, `u64`) ], }) }

export function matchedOrderMetadataInfo( tx: Transaction, typeArgs: [string, string], matchedOrderMetadata: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::matched_order_metadata_info`, typeArguments: typeArgs, arguments: [ obj(tx, matchedOrderMetadata) ], }) }

export function tickLevel( tx: Transaction, order: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::tick_level`, arguments: [ obj(tx, order) ], }) }

export interface PlaceLimitOrderIntArgs { pool: TransactionObjectInput; clientOrderId: bigint | TransactionArgument; price: bigint | TransactionArgument; quantity: bigint | TransactionArgument; selfMatchingPrevention: number | TransactionArgument; isBid: boolean | TransactionArgument; expireTimestamp: bigint | TransactionArgument; restriction: number | TransactionArgument; clock: TransactionObjectInput; accountCap: TransactionObjectInput; computeMetadata: boolean | TransactionArgument }

export function placeLimitOrderInt( tx: Transaction, typeArgs: [string, string], args: PlaceLimitOrderIntArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::place_limit_order_int`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.clientOrderId, `u64`), pure(tx, args.price, `u64`), pure(tx, args.quantity, `u64`), pure(tx, args.selfMatchingPrevention, `u8`), pure(tx, args.isBid, `bool`), pure(tx, args.expireTimestamp, `u64`), pure(tx, args.restriction, `u8`), obj(tx, args.clock), obj(tx, args.accountCap), pure(tx, args.computeMetadata, `bool`) ], }) }

export interface PlaceLimitOrderWithMetadataArgs { pool: TransactionObjectInput; clientOrderId: bigint | TransactionArgument; price: bigint | TransactionArgument; quantity: bigint | TransactionArgument; selfMatchingPrevention: number | TransactionArgument; isBid: boolean | TransactionArgument; expireTimestamp: bigint | TransactionArgument; restriction: number | TransactionArgument; clock: TransactionObjectInput; accountCap: TransactionObjectInput }

export function placeLimitOrderWithMetadata( tx: Transaction, typeArgs: [string, string], args: PlaceLimitOrderWithMetadataArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::place_limit_order_with_metadata`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.clientOrderId, `u64`), pure(tx, args.price, `u64`), pure(tx, args.quantity, `u64`), pure(tx, args.selfMatchingPrevention, `u8`), pure(tx, args.isBid, `bool`), pure(tx, args.expireTimestamp, `u64`), pure(tx, args.restriction, `u8`), obj(tx, args.clock), obj(tx, args.accountCap) ], }) }

export interface PlaceMarketOrderIntArgs { pool: TransactionObjectInput; accountCap: TransactionObjectInput; clientOrderId: bigint | TransactionArgument; quantity: bigint | TransactionArgument; isBid: boolean | TransactionArgument; baseCoin: TransactionObjectInput; quoteCoin: TransactionObjectInput; clock: TransactionObjectInput; computeMetadata: boolean | TransactionArgument }

export function placeMarketOrderInt( tx: Transaction, typeArgs: [string, string], args: PlaceMarketOrderIntArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::place_market_order_int`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.accountCap), pure(tx, args.clientOrderId, `u64`), pure(tx, args.quantity, `u64`), pure(tx, args.isBid, `bool`), obj(tx, args.baseCoin), obj(tx, args.quoteCoin), obj(tx, args.clock), pure(tx, args.computeMetadata, `bool`) ], }) }

export interface PlaceMarketOrderWithMetadataArgs { pool: TransactionObjectInput; accountCap: TransactionObjectInput; clientOrderId: bigint | TransactionArgument; quantity: bigint | TransactionArgument; isBid: boolean | TransactionArgument; baseCoin: TransactionObjectInput; quoteCoin: TransactionObjectInput; clock: TransactionObjectInput }

export function placeMarketOrderWithMetadata( tx: Transaction, typeArgs: [string, string], args: PlaceMarketOrderWithMetadataArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::place_market_order_with_metadata`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), obj(tx, args.accountCap), pure(tx, args.clientOrderId, `u64`), pure(tx, args.quantity, `u64`), pure(tx, args.isBid, `bool`), obj(tx, args.baseCoin), obj(tx, args.quoteCoin), obj(tx, args.clock) ], }) }

export function poolSize( tx: Transaction, typeArgs: [string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::pool_size`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export function quoteAssetTradingFeesValue( tx: Transaction, typeArgs: [string, string], pool: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::quote_asset_trading_fees_value`, typeArguments: typeArgs, arguments: [ obj(tx, pool) ], }) }

export interface SwapExactBaseForQuoteWithMetadataArgs { pool: TransactionObjectInput; clientOrderId: bigint | TransactionArgument; accountCap: TransactionObjectInput; quantity: bigint | TransactionArgument; baseCoin: TransactionObjectInput; quoteCoin: TransactionObjectInput; clock: TransactionObjectInput }

export function swapExactBaseForQuoteWithMetadata( tx: Transaction, typeArgs: [string, string], args: SwapExactBaseForQuoteWithMetadataArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::swap_exact_base_for_quote_with_metadata`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.clientOrderId, `u64`), obj(tx, args.accountCap), pure(tx, args.quantity, `u64`), obj(tx, args.baseCoin), obj(tx, args.quoteCoin), obj(tx, args.clock) ], }) }

export interface SwapExactQuoteForBaseWithMetadataArgs { pool: TransactionObjectInput; clientOrderId: bigint | TransactionArgument; accountCap: TransactionObjectInput; quantity: bigint | TransactionArgument; clock: TransactionObjectInput; quoteCoin: TransactionObjectInput }

export function swapExactQuoteForBaseWithMetadata( tx: Transaction, typeArgs: [string, string], args: SwapExactQuoteForBaseWithMetadataArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::swap_exact_quote_for_base_with_metadata`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.clientOrderId, `u64`), obj(tx, args.accountCap), pure(tx, args.quantity, `u64`), obj(tx, args.clock), obj(tx, args.quoteCoin) ], }) }

export interface UsrOpenOrdersExistArgs { pool: TransactionObjectInput; owner: string | TransactionArgument }

export function usrOpenOrdersExist( tx: Transaction, typeArgs: [string, string], args: UsrOpenOrdersExistArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::usr_open_orders_exist`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.owner, `address`) ], }) }

export interface UsrOpenOrdersForAddressArgs { pool: TransactionObjectInput; owner: string | TransactionArgument }

export function usrOpenOrdersForAddress( tx: Transaction, typeArgs: [string, string], args: UsrOpenOrdersForAddressArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::usr_open_orders_for_address`, typeArguments: typeArgs, arguments: [ obj(tx, args.pool), pure(tx, args.owner, `address`) ], }) }

export interface WithdrawFeesArgs { poolOwnerCap: TransactionObjectInput; pool: TransactionObjectInput }

export function withdrawFees( tx: Transaction, typeArgs: [string, string], args: WithdrawFeesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::clob_v2::withdraw_fees`, typeArguments: typeArgs, arguments: [ obj(tx, args.poolOwnerCap), obj(tx, args.pool) ], }) }
