import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {ID} from "../../sui/object/structs";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function new_( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian::new`, typeArguments: [typeArg], arguments: [ ], }) }

export interface AccountAvailableBalanceArgs { custodian: TransactionObjectInput; user: string | TransactionArgument }

export function accountAvailableBalance( tx: Transaction, typeArg: string, args: AccountAvailableBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian::account_available_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), pure(tx, args.user, `${ID.$typeName}`) ], }) }

export interface AccountBalanceArgs { custodian: TransactionObjectInput; user: string | TransactionArgument }

export function accountBalance( tx: Transaction, typeArg: string, args: AccountBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian::account_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), pure(tx, args.user, `${ID.$typeName}`) ], }) }

export interface AccountLockedBalanceArgs { custodian: TransactionObjectInput; user: string | TransactionArgument }

export function accountLockedBalance( tx: Transaction, typeArg: string, args: AccountLockedBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian::account_locked_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), pure(tx, args.user, `${ID.$typeName}`) ], }) }

export interface BorrowMutAccountBalanceArgs { custodian: TransactionObjectInput; user: string | TransactionArgument }

export function borrowMutAccountBalance( tx: Transaction, typeArg: string, args: BorrowMutAccountBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian::borrow_mut_account_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), pure(tx, args.user, `${ID.$typeName}`) ], }) }

export interface DecreaseUserAvailableBalanceArgs { custodian: TransactionObjectInput; accountCap: TransactionObjectInput; quantity: bigint | TransactionArgument }

export function decreaseUserAvailableBalance( tx: Transaction, typeArg: string, args: DecreaseUserAvailableBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian::decrease_user_available_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), obj(tx, args.accountCap), pure(tx, args.quantity, `u64`) ], }) }

export interface DecreaseUserLockedBalanceArgs { custodian: TransactionObjectInput; user: string | TransactionArgument; quantity: bigint | TransactionArgument }

export function decreaseUserLockedBalance( tx: Transaction, typeArg: string, args: DecreaseUserLockedBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian::decrease_user_locked_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), pure(tx, args.user, `${ID.$typeName}`), pure(tx, args.quantity, `u64`) ], }) }

export interface IncreaseUserAvailableBalanceArgs { custodian: TransactionObjectInput; user: string | TransactionArgument; quantity: TransactionObjectInput }

export function increaseUserAvailableBalance( tx: Transaction, typeArg: string, args: IncreaseUserAvailableBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian::increase_user_available_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), pure(tx, args.user, `${ID.$typeName}`), obj(tx, args.quantity) ], }) }

export interface IncreaseUserLockedBalanceArgs { custodian: TransactionObjectInput; accountCap: TransactionObjectInput; quantity: TransactionObjectInput }

export function increaseUserLockedBalance( tx: Transaction, typeArg: string, args: IncreaseUserLockedBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian::increase_user_locked_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), obj(tx, args.accountCap), obj(tx, args.quantity) ], }) }

export interface LockBalanceArgs { custodian: TransactionObjectInput; accountCap: TransactionObjectInput; quantity: bigint | TransactionArgument }

export function lockBalance( tx: Transaction, typeArg: string, args: LockBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian::lock_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), obj(tx, args.accountCap), pure(tx, args.quantity, `u64`) ], }) }

export function mintAccountCap( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian::mint_account_cap`, arguments: [ ], }) }

export interface UnlockBalanceArgs { custodian: TransactionObjectInput; user: string | TransactionArgument; quantity: bigint | TransactionArgument }

export function unlockBalance( tx: Transaction, typeArg: string, args: UnlockBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian::unlock_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), pure(tx, args.user, `${ID.$typeName}`), pure(tx, args.quantity, `u64`) ], }) }

export interface WithdrawAssetArgs { custodian: TransactionObjectInput; quantity: bigint | TransactionArgument; accountCap: TransactionObjectInput }

export function withdrawAsset( tx: Transaction, typeArg: string, args: WithdrawAssetArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian::withdraw_asset`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), pure(tx, args.quantity, `u64`), obj(tx, args.accountCap) ], }) }
