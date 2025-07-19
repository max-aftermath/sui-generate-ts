import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function new_( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::new`, typeArguments: [typeArg], arguments: [ ], }) }

export interface AccountAvailableBalanceArgs { custodian: TransactionObjectInput; owner: string | TransactionArgument }

export function accountAvailableBalance( tx: Transaction, typeArg: string, args: AccountAvailableBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::account_available_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), pure(tx, args.owner, `address`) ], }) }

export interface AccountBalanceArgs { custodian: TransactionObjectInput; owner: string | TransactionArgument }

export function accountBalance( tx: Transaction, typeArg: string, args: AccountBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::account_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), pure(tx, args.owner, `address`) ], }) }

export interface AccountLockedBalanceArgs { custodian: TransactionObjectInput; owner: string | TransactionArgument }

export function accountLockedBalance( tx: Transaction, typeArg: string, args: AccountLockedBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::account_locked_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), pure(tx, args.owner, `address`) ], }) }

export interface BorrowMutAccountBalanceArgs { custodian: TransactionObjectInput; owner: string | TransactionArgument }

export function borrowMutAccountBalance( tx: Transaction, typeArg: string, args: BorrowMutAccountBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::borrow_mut_account_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), pure(tx, args.owner, `address`) ], }) }

export interface DecreaseUserAvailableBalanceArgs { custodian: TransactionObjectInput; accountCap: TransactionObjectInput; quantity: bigint | TransactionArgument }

export function decreaseUserAvailableBalance( tx: Transaction, typeArg: string, args: DecreaseUserAvailableBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::decrease_user_available_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), obj(tx, args.accountCap), pure(tx, args.quantity, `u64`) ], }) }

export interface DecreaseUserLockedBalanceArgs { custodian: TransactionObjectInput; owner: string | TransactionArgument; quantity: bigint | TransactionArgument }

export function decreaseUserLockedBalance( tx: Transaction, typeArg: string, args: DecreaseUserLockedBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::decrease_user_locked_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), pure(tx, args.owner, `address`), pure(tx, args.quantity, `u64`) ], }) }

export interface IncreaseUserAvailableBalanceArgs { custodian: TransactionObjectInput; owner: string | TransactionArgument; quantity: TransactionObjectInput }

export function increaseUserAvailableBalance( tx: Transaction, typeArg: string, args: IncreaseUserAvailableBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::increase_user_available_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), pure(tx, args.owner, `address`), obj(tx, args.quantity) ], }) }

export interface IncreaseUserLockedBalanceArgs { custodian: TransactionObjectInput; accountCap: TransactionObjectInput; quantity: TransactionObjectInput }

export function increaseUserLockedBalance( tx: Transaction, typeArg: string, args: IncreaseUserLockedBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::increase_user_locked_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), obj(tx, args.accountCap), obj(tx, args.quantity) ], }) }

export interface LockBalanceArgs { custodian: TransactionObjectInput; accountCap: TransactionObjectInput; quantity: bigint | TransactionArgument }

export function lockBalance( tx: Transaction, typeArg: string, args: LockBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::lock_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), obj(tx, args.accountCap), pure(tx, args.quantity, `u64`) ], }) }

export function mintAccountCap( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::mint_account_cap`, arguments: [ ], }) }

export interface UnlockBalanceArgs { custodian: TransactionObjectInput; owner: string | TransactionArgument; quantity: bigint | TransactionArgument }

export function unlockBalance( tx: Transaction, typeArg: string, args: UnlockBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::unlock_balance`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), pure(tx, args.owner, `address`), pure(tx, args.quantity, `u64`) ], }) }

export interface WithdrawAssetArgs { custodian: TransactionObjectInput; quantity: bigint | TransactionArgument; accountCap: TransactionObjectInput }

export function withdrawAsset( tx: Transaction, typeArg: string, args: WithdrawAssetArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::withdraw_asset`, typeArguments: [typeArg], arguments: [ obj(tx, args.custodian), pure(tx, args.quantity, `u64`), obj(tx, args.accountCap) ], }) }

export function accountOwner( tx: Transaction, accountCap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::account_owner`, arguments: [ obj(tx, accountCap) ], }) }

export function createChildAccountCap( tx: Transaction, adminAccountCap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::create_child_account_cap`, arguments: [ obj(tx, adminAccountCap) ], }) }

export function deleteAccountCap( tx: Transaction, accountCap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::custodian_v2::delete_account_cap`, arguments: [ obj(tx, accountCap) ], }) }
