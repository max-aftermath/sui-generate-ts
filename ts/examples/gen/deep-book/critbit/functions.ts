import {PUBLISHED_AT} from "..";
import {GenericArg, generic, obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function destroyEmpty( tx: Transaction, typeArg: string, tree: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::destroy_empty`, typeArguments: [typeArg], arguments: [ obj(tx, tree) ], }) }

export function isEmpty( tx: Transaction, typeArg: string, tree: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::is_empty`, typeArguments: [typeArg], arguments: [ obj(tx, tree) ], }) }

export function new_( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::new`, typeArguments: [typeArg], arguments: [ ], }) }

export function size( tx: Transaction, typeArg: string, tree: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::size`, typeArguments: [typeArg], arguments: [ obj(tx, tree) ], }) }

export function drop( tx: Transaction, typeArg: string, tree: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::drop`, typeArguments: [typeArg], arguments: [ obj(tx, tree) ], }) }

export interface BorrowLeafByIndexArgs { tree: TransactionObjectInput; index: bigint | TransactionArgument }

export function borrowLeafByIndex( tx: Transaction, typeArg: string, args: BorrowLeafByIndexArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::borrow_leaf_by_index`, typeArguments: [typeArg], arguments: [ obj(tx, args.tree), pure(tx, args.index, `u64`) ], }) }

export interface BorrowLeafByKeyArgs { tree: TransactionObjectInput; key: bigint | TransactionArgument }

export function borrowLeafByKey( tx: Transaction, typeArg: string, args: BorrowLeafByKeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::borrow_leaf_by_key`, typeArguments: [typeArg], arguments: [ obj(tx, args.tree), pure(tx, args.key, `u64`) ], }) }

export interface BorrowMutLeafByIndexArgs { tree: TransactionObjectInput; index: bigint | TransactionArgument }

export function borrowMutLeafByIndex( tx: Transaction, typeArg: string, args: BorrowMutLeafByIndexArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::borrow_mut_leaf_by_index`, typeArguments: [typeArg], arguments: [ obj(tx, args.tree), pure(tx, args.index, `u64`) ], }) }

export interface FindClosestKeyArgs { tree: TransactionObjectInput; key: bigint | TransactionArgument }

export function findClosestKey( tx: Transaction, typeArg: string, args: FindClosestKeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::find_closest_key`, typeArguments: [typeArg], arguments: [ obj(tx, args.tree), pure(tx, args.key, `u64`) ], }) }

export interface FindLeafArgs { tree: TransactionObjectInput; key: bigint | TransactionArgument }

export function findLeaf( tx: Transaction, typeArg: string, args: FindLeafArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::find_leaf`, typeArguments: [typeArg], arguments: [ obj(tx, args.tree), pure(tx, args.key, `u64`) ], }) }

export interface GetClosestLeafIndexByKeyArgs { tree: TransactionObjectInput; key: bigint | TransactionArgument }

export function getClosestLeafIndexByKey( tx: Transaction, typeArg: string, args: GetClosestLeafIndexByKeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::get_closest_leaf_index_by_key`, typeArguments: [typeArg], arguments: [ obj(tx, args.tree), pure(tx, args.key, `u64`) ], }) }

export interface InsertLeafArgs { tree: TransactionObjectInput; key: bigint | TransactionArgument; value: GenericArg }

export function insertLeaf( tx: Transaction, typeArg: string, args: InsertLeafArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::insert_leaf`, typeArguments: [typeArg], arguments: [ obj(tx, args.tree), pure(tx, args.key, `u64`), generic(tx, `${typeArg}`, args.value) ], }) }

export interface IsLeftChildArgs { tree: TransactionObjectInput; parentIndex: bigint | TransactionArgument; index: bigint | TransactionArgument }

export function isLeftChild( tx: Transaction, typeArg: string, args: IsLeftChildArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::is_left_child`, typeArguments: [typeArg], arguments: [ obj(tx, args.tree), pure(tx, args.parentIndex, `u64`), pure(tx, args.index, `u64`) ], }) }

export interface LeftMostLeafArgs { tree: TransactionObjectInput; root: bigint | TransactionArgument }

export function leftMostLeaf( tx: Transaction, typeArg: string, args: LeftMostLeafArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::left_most_leaf`, typeArguments: [typeArg], arguments: [ obj(tx, args.tree), pure(tx, args.root, `u64`) ], }) }

export function maxLeaf( tx: Transaction, typeArg: string, tree: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::max_leaf`, typeArguments: [typeArg], arguments: [ obj(tx, tree) ], }) }

export function minLeaf( tx: Transaction, typeArg: string, tree: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::min_leaf`, typeArguments: [typeArg], arguments: [ obj(tx, tree) ], }) }

export interface NextLeafArgs { tree: TransactionObjectInput; key: bigint | TransactionArgument }

export function nextLeaf( tx: Transaction, typeArg: string, args: NextLeafArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::next_leaf`, typeArguments: [typeArg], arguments: [ obj(tx, args.tree), pure(tx, args.key, `u64`) ], }) }

export interface PreviousLeafArgs { tree: TransactionObjectInput; key: bigint | TransactionArgument }

export function previousLeaf( tx: Transaction, typeArg: string, args: PreviousLeafArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::previous_leaf`, typeArguments: [typeArg], arguments: [ obj(tx, args.tree), pure(tx, args.key, `u64`) ], }) }

export interface RemoveLeafByIndexArgs { tree: TransactionObjectInput; index: bigint | TransactionArgument }

export function removeLeafByIndex( tx: Transaction, typeArg: string, args: RemoveLeafByIndexArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::remove_leaf_by_index`, typeArguments: [typeArg], arguments: [ obj(tx, args.tree), pure(tx, args.index, `u64`) ], }) }

export interface RightMostLeafArgs { tree: TransactionObjectInput; root: bigint | TransactionArgument }

export function rightMostLeaf( tx: Transaction, typeArg: string, args: RightMostLeafArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::right_most_leaf`, typeArguments: [typeArg], arguments: [ obj(tx, args.tree), pure(tx, args.root, `u64`) ], }) }

export interface UpdateChildArgs { tree: TransactionObjectInput; parentIndex: bigint | TransactionArgument; newChild: bigint | TransactionArgument; isLeftChild: boolean | TransactionArgument }

export function updateChild( tx: Transaction, typeArg: string, args: UpdateChildArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::critbit::update_child`, typeArguments: [typeArg], arguments: [ obj(tx, args.tree), pure(tx, args.parentIndex, `u64`), pure(tx, args.newChild, `u64`), pure(tx, args.isLeftChild, `bool`) ], }) }
