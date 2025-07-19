import * as reified from "../../_framework/reified";
import {TypeName} from "../../_dependencies/source/0x1/type-name/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {Balance} from "../../sui/balance/structs";
import {LinkedTable} from "../../sui/linked-table/structs";
import {ID, UID} from "../../sui/object/structs";
import {SUI} from "../../sui/sui/structs";
import {Table} from "../../sui/table/structs";
import {CritbitTree} from "../critbit/structs";
import {Custodian} from "../custodian/structs";
import {PKG_V21} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Order =============================== */

export function isOrder(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V21}::clob::Order`; }

export interface OrderFields { orderId: ToField<"u64">; price: ToField<"u64">; quantity: ToField<"u64">; isBid: ToField<"bool">; owner: ToField<ID>; expireTimestamp: ToField<"u64"> }

export type OrderReified = Reified< Order, OrderFields >;

export class Order implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V21}::clob::Order`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Order.$typeName; readonly $fullTypeName: `${typeof PKG_V21}::clob::Order`; readonly $typeArgs: []; readonly $isPhantom = Order.$isPhantom;

 readonly orderId: ToField<"u64">; readonly price: ToField<"u64">; readonly quantity: ToField<"u64">; readonly isBid: ToField<"bool">; readonly owner: ToField<ID>; readonly expireTimestamp: ToField<"u64">

 private constructor(typeArgs: [], fields: OrderFields, ) { this.$fullTypeName = composeSuiType( Order.$typeName, ...typeArgs ) as `${typeof PKG_V21}::clob::Order`; this.$typeArgs = typeArgs;

 this.orderId = fields.orderId;; this.price = fields.price;; this.quantity = fields.quantity;; this.isBid = fields.isBid;; this.owner = fields.owner;; this.expireTimestamp = fields.expireTimestamp; }

 static reified( ): OrderReified { return { typeName: Order.$typeName, fullTypeName: composeSuiType( Order.$typeName, ...[] ) as `${typeof PKG_V21}::clob::Order`, typeArgs: [ ] as [], isPhantom: Order.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Order.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Order.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Order.fromBcs( data, ), bcs: Order.bcs, fromJSONField: (field: any) => Order.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Order.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Order.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Order.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Order.fetch( client, id, ), new: ( fields: OrderFields, ) => { return new Order( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Order.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Order>> { return phantom(Order.reified( )); } static get p() { return Order.phantom() }

 static get bcs() { return bcs.struct("Order", {

 orderId: bcs.u64(), price: bcs.u64(), quantity: bcs.u64(), isBid: bcs.bool(), owner: ID.bcs, expireTimestamp: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Order { return Order.reified( ).new( { orderId: decodeFromFields("u64", fields.orderId), price: decodeFromFields("u64", fields.price), quantity: decodeFromFields("u64", fields.quantity), isBid: decodeFromFields("bool", fields.isBid), owner: decodeFromFields(ID.reified(), fields.owner), expireTimestamp: decodeFromFields("u64", fields.expireTimestamp) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Order { if (!isOrder(item.type)) { throw new Error("not a Order type");

 }

 return Order.reified( ).new( { orderId: decodeFromFieldsWithTypes("u64", item.fields.orderId), price: decodeFromFieldsWithTypes("u64", item.fields.price), quantity: decodeFromFieldsWithTypes("u64", item.fields.quantity), isBid: decodeFromFieldsWithTypes("bool", item.fields.isBid), owner: decodeFromFieldsWithTypes(ID.reified(), item.fields.owner), expireTimestamp: decodeFromFieldsWithTypes("u64", item.fields.expireTimestamp) } ) }

 static fromBcs( data: Uint8Array ): Order { return Order.fromFields( Order.bcs.parse(data) ) }

 toJSONField() { return {

 orderId: this.orderId.toString(),price: this.price.toString(),quantity: this.quantity.toString(),isBid: this.isBid,owner: this.owner,expireTimestamp: this.expireTimestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Order { return Order.reified( ).new( { orderId: decodeFromJSONField("u64", field.orderId), price: decodeFromJSONField("u64", field.price), quantity: decodeFromJSONField("u64", field.quantity), isBid: decodeFromJSONField("bool", field.isBid), owner: decodeFromJSONField(ID.reified(), field.owner), expireTimestamp: decodeFromJSONField("u64", field.expireTimestamp) } ) }

 static fromJSON( json: Record<string, any> ): Order { if (json.$typeName !== Order.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Order.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Order { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrder(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Order object`); } return Order.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Order { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOrder(data.bcs.type)) { throw new Error(`object at is not a Order object`); }

 return Order.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Order.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Order> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Order object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrder(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Order object`); }

 return Order.fromSuiObjectData( res.data ); }

 }

/* ============================== OrderCanceled =============================== */

export function isOrderCanceled(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V21}::clob::OrderCanceled` + '<'); }

export interface OrderCanceledFields<BaseAsset extends PhantomTypeArgument, QuoteAsset extends PhantomTypeArgument> { poolId: ToField<ID>; orderId: ToField<"u64">; isBid: ToField<"bool">; owner: ToField<ID>; baseAssetQuantityCanceled: ToField<"u64">; price: ToField<"u64"> }

export type OrderCanceledReified<BaseAsset extends PhantomTypeArgument, QuoteAsset extends PhantomTypeArgument> = Reified< OrderCanceled<BaseAsset, QuoteAsset>, OrderCanceledFields<BaseAsset, QuoteAsset> >;

export class OrderCanceled<BaseAsset extends PhantomTypeArgument, QuoteAsset extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V21}::clob::OrderCanceled`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = OrderCanceled.$typeName; readonly $fullTypeName: `${typeof PKG_V21}::clob::OrderCanceled<${PhantomToTypeStr<BaseAsset>}, ${PhantomToTypeStr<QuoteAsset>}>`; readonly $typeArgs: [PhantomToTypeStr<BaseAsset>, PhantomToTypeStr<QuoteAsset>]; readonly $isPhantom = OrderCanceled.$isPhantom;

 readonly poolId: ToField<ID>; readonly orderId: ToField<"u64">; readonly isBid: ToField<"bool">; readonly owner: ToField<ID>; readonly baseAssetQuantityCanceled: ToField<"u64">; readonly price: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<BaseAsset>, PhantomToTypeStr<QuoteAsset>], fields: OrderCanceledFields<BaseAsset, QuoteAsset>, ) { this.$fullTypeName = composeSuiType( OrderCanceled.$typeName, ...typeArgs ) as `${typeof PKG_V21}::clob::OrderCanceled<${PhantomToTypeStr<BaseAsset>}, ${PhantomToTypeStr<QuoteAsset>}>`; this.$typeArgs = typeArgs;

 this.poolId = fields.poolId;; this.orderId = fields.orderId;; this.isBid = fields.isBid;; this.owner = fields.owner;; this.baseAssetQuantityCanceled = fields.baseAssetQuantityCanceled;; this.price = fields.price; }

 static reified<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( BaseAsset: BaseAsset, QuoteAsset: QuoteAsset ): OrderCanceledReified<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return { typeName: OrderCanceled.$typeName, fullTypeName: composeSuiType( OrderCanceled.$typeName, ...[extractType(BaseAsset), extractType(QuoteAsset)] ) as `${typeof PKG_V21}::clob::OrderCanceled<${PhantomToTypeStr<ToPhantomTypeArgument<BaseAsset>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<QuoteAsset>>}>`, typeArgs: [ extractType(BaseAsset), extractType(QuoteAsset) ] as [PhantomToTypeStr<ToPhantomTypeArgument<BaseAsset>>, PhantomToTypeStr<ToPhantomTypeArgument<QuoteAsset>>], isPhantom: OrderCanceled.$isPhantom, reifiedTypeArgs: [BaseAsset, QuoteAsset], fromFields: (fields: Record<string, any>) => OrderCanceled.fromFields( [BaseAsset, QuoteAsset], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OrderCanceled.fromFieldsWithTypes( [BaseAsset, QuoteAsset], item, ), fromBcs: (data: Uint8Array) => OrderCanceled.fromBcs( [BaseAsset, QuoteAsset], data, ), bcs: OrderCanceled.bcs, fromJSONField: (field: any) => OrderCanceled.fromJSONField( [BaseAsset, QuoteAsset], field, ), fromJSON: (json: Record<string, any>) => OrderCanceled.fromJSON( [BaseAsset, QuoteAsset], json, ), fromSuiParsedData: (content: SuiParsedData) => OrderCanceled.fromSuiParsedData( [BaseAsset, QuoteAsset], content, ), fromSuiObjectData: (content: SuiObjectData) => OrderCanceled.fromSuiObjectData( [BaseAsset, QuoteAsset], content, ), fetch: async (client: SuiClient, id: string) => OrderCanceled.fetch( client, [BaseAsset, QuoteAsset], id, ), new: ( fields: OrderCanceledFields<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>>, ) => { return new OrderCanceled( [extractType(BaseAsset), extractType(QuoteAsset)], fields ) }, kind: "StructClassReified", } }

 static get r() { return OrderCanceled.reified }

 static phantom<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( BaseAsset: BaseAsset, QuoteAsset: QuoteAsset ): PhantomReified<ToTypeStr<OrderCanceled<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>>>> { return phantom(OrderCanceled.reified( BaseAsset, QuoteAsset )); } static get p() { return OrderCanceled.phantom }

 static get bcs() { return bcs.struct("OrderCanceled", {

 poolId: ID.bcs, orderId: bcs.u64(), isBid: bcs.bool(), owner: ID.bcs, baseAssetQuantityCanceled: bcs.u64(), price: bcs.u64()

}) };

 static fromFields<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], fields: Record<string, any> ): OrderCanceled<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return OrderCanceled.reified( typeArgs[0], typeArgs[1], ).new( { poolId: decodeFromFields(ID.reified(), fields.poolId), orderId: decodeFromFields("u64", fields.orderId), isBid: decodeFromFields("bool", fields.isBid), owner: decodeFromFields(ID.reified(), fields.owner), baseAssetQuantityCanceled: decodeFromFields("u64", fields.baseAssetQuantityCanceled), price: decodeFromFields("u64", fields.price) } ) }

 static fromFieldsWithTypes<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], item: FieldsWithTypes ): OrderCanceled<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (!isOrderCanceled(item.type)) { throw new Error("not a OrderCanceled type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return OrderCanceled.reified( typeArgs[0], typeArgs[1], ).new( { poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.poolId), orderId: decodeFromFieldsWithTypes("u64", item.fields.orderId), isBid: decodeFromFieldsWithTypes("bool", item.fields.isBid), owner: decodeFromFieldsWithTypes(ID.reified(), item.fields.owner), baseAssetQuantityCanceled: decodeFromFieldsWithTypes("u64", item.fields.baseAssetQuantityCanceled), price: decodeFromFieldsWithTypes("u64", item.fields.price) } ) }

 static fromBcs<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], data: Uint8Array ): OrderCanceled<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return OrderCanceled.fromFields( typeArgs, OrderCanceled.bcs.parse(data) ) }

 toJSONField() { return {

 poolId: this.poolId,orderId: this.orderId.toString(),isBid: this.isBid,owner: this.owner,baseAssetQuantityCanceled: this.baseAssetQuantityCanceled.toString(),price: this.price.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], field: any ): OrderCanceled<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return OrderCanceled.reified( typeArgs[0], typeArgs[1], ).new( { poolId: decodeFromJSONField(ID.reified(), field.poolId), orderId: decodeFromJSONField("u64", field.orderId), isBid: decodeFromJSONField("bool", field.isBid), owner: decodeFromJSONField(ID.reified(), field.owner), baseAssetQuantityCanceled: decodeFromJSONField("u64", field.baseAssetQuantityCanceled), price: decodeFromJSONField("u64", field.price) } ) }

 static fromJSON<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], json: Record<string, any> ): OrderCanceled<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (json.$typeName !== OrderCanceled.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(OrderCanceled.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return OrderCanceled.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], content: SuiParsedData ): OrderCanceled<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrderCanceled(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OrderCanceled object`); } return OrderCanceled.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], data: SuiObjectData ): OrderCanceled<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOrderCanceled(data.bcs.type)) { throw new Error(`object at is not a OrderCanceled object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return OrderCanceled.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OrderCanceled.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [BaseAsset, QuoteAsset], id: string ): Promise<OrderCanceled<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OrderCanceled object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrderCanceled(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OrderCanceled object`); }

 return OrderCanceled.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== OrderFilled =============================== */

export function isOrderFilled(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V21}::clob::OrderFilled` + '<'); }

export interface OrderFilledFields<BaseAsset extends PhantomTypeArgument, QuoteAsset extends PhantomTypeArgument> { poolId: ToField<ID>; orderId: ToField<"u64">; isBid: ToField<"bool">; owner: ToField<ID>; totalQuantity: ToField<"u64">; baseAssetQuantityFilled: ToField<"u64">; baseAssetQuantityRemaining: ToField<"u64">; price: ToField<"u64"> }

export type OrderFilledReified<BaseAsset extends PhantomTypeArgument, QuoteAsset extends PhantomTypeArgument> = Reified< OrderFilled<BaseAsset, QuoteAsset>, OrderFilledFields<BaseAsset, QuoteAsset> >;

export class OrderFilled<BaseAsset extends PhantomTypeArgument, QuoteAsset extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V21}::clob::OrderFilled`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = OrderFilled.$typeName; readonly $fullTypeName: `${typeof PKG_V21}::clob::OrderFilled<${PhantomToTypeStr<BaseAsset>}, ${PhantomToTypeStr<QuoteAsset>}>`; readonly $typeArgs: [PhantomToTypeStr<BaseAsset>, PhantomToTypeStr<QuoteAsset>]; readonly $isPhantom = OrderFilled.$isPhantom;

 readonly poolId: ToField<ID>; readonly orderId: ToField<"u64">; readonly isBid: ToField<"bool">; readonly owner: ToField<ID>; readonly totalQuantity: ToField<"u64">; readonly baseAssetQuantityFilled: ToField<"u64">; readonly baseAssetQuantityRemaining: ToField<"u64">; readonly price: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<BaseAsset>, PhantomToTypeStr<QuoteAsset>], fields: OrderFilledFields<BaseAsset, QuoteAsset>, ) { this.$fullTypeName = composeSuiType( OrderFilled.$typeName, ...typeArgs ) as `${typeof PKG_V21}::clob::OrderFilled<${PhantomToTypeStr<BaseAsset>}, ${PhantomToTypeStr<QuoteAsset>}>`; this.$typeArgs = typeArgs;

 this.poolId = fields.poolId;; this.orderId = fields.orderId;; this.isBid = fields.isBid;; this.owner = fields.owner;; this.totalQuantity = fields.totalQuantity;; this.baseAssetQuantityFilled = fields.baseAssetQuantityFilled;; this.baseAssetQuantityRemaining = fields.baseAssetQuantityRemaining;; this.price = fields.price; }

 static reified<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( BaseAsset: BaseAsset, QuoteAsset: QuoteAsset ): OrderFilledReified<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return { typeName: OrderFilled.$typeName, fullTypeName: composeSuiType( OrderFilled.$typeName, ...[extractType(BaseAsset), extractType(QuoteAsset)] ) as `${typeof PKG_V21}::clob::OrderFilled<${PhantomToTypeStr<ToPhantomTypeArgument<BaseAsset>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<QuoteAsset>>}>`, typeArgs: [ extractType(BaseAsset), extractType(QuoteAsset) ] as [PhantomToTypeStr<ToPhantomTypeArgument<BaseAsset>>, PhantomToTypeStr<ToPhantomTypeArgument<QuoteAsset>>], isPhantom: OrderFilled.$isPhantom, reifiedTypeArgs: [BaseAsset, QuoteAsset], fromFields: (fields: Record<string, any>) => OrderFilled.fromFields( [BaseAsset, QuoteAsset], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OrderFilled.fromFieldsWithTypes( [BaseAsset, QuoteAsset], item, ), fromBcs: (data: Uint8Array) => OrderFilled.fromBcs( [BaseAsset, QuoteAsset], data, ), bcs: OrderFilled.bcs, fromJSONField: (field: any) => OrderFilled.fromJSONField( [BaseAsset, QuoteAsset], field, ), fromJSON: (json: Record<string, any>) => OrderFilled.fromJSON( [BaseAsset, QuoteAsset], json, ), fromSuiParsedData: (content: SuiParsedData) => OrderFilled.fromSuiParsedData( [BaseAsset, QuoteAsset], content, ), fromSuiObjectData: (content: SuiObjectData) => OrderFilled.fromSuiObjectData( [BaseAsset, QuoteAsset], content, ), fetch: async (client: SuiClient, id: string) => OrderFilled.fetch( client, [BaseAsset, QuoteAsset], id, ), new: ( fields: OrderFilledFields<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>>, ) => { return new OrderFilled( [extractType(BaseAsset), extractType(QuoteAsset)], fields ) }, kind: "StructClassReified", } }

 static get r() { return OrderFilled.reified }

 static phantom<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( BaseAsset: BaseAsset, QuoteAsset: QuoteAsset ): PhantomReified<ToTypeStr<OrderFilled<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>>>> { return phantom(OrderFilled.reified( BaseAsset, QuoteAsset )); } static get p() { return OrderFilled.phantom }

 static get bcs() { return bcs.struct("OrderFilled", {

 poolId: ID.bcs, orderId: bcs.u64(), isBid: bcs.bool(), owner: ID.bcs, totalQuantity: bcs.u64(), baseAssetQuantityFilled: bcs.u64(), baseAssetQuantityRemaining: bcs.u64(), price: bcs.u64()

}) };

 static fromFields<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], fields: Record<string, any> ): OrderFilled<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return OrderFilled.reified( typeArgs[0], typeArgs[1], ).new( { poolId: decodeFromFields(ID.reified(), fields.poolId), orderId: decodeFromFields("u64", fields.orderId), isBid: decodeFromFields("bool", fields.isBid), owner: decodeFromFields(ID.reified(), fields.owner), totalQuantity: decodeFromFields("u64", fields.totalQuantity), baseAssetQuantityFilled: decodeFromFields("u64", fields.baseAssetQuantityFilled), baseAssetQuantityRemaining: decodeFromFields("u64", fields.baseAssetQuantityRemaining), price: decodeFromFields("u64", fields.price) } ) }

 static fromFieldsWithTypes<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], item: FieldsWithTypes ): OrderFilled<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (!isOrderFilled(item.type)) { throw new Error("not a OrderFilled type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return OrderFilled.reified( typeArgs[0], typeArgs[1], ).new( { poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.poolId), orderId: decodeFromFieldsWithTypes("u64", item.fields.orderId), isBid: decodeFromFieldsWithTypes("bool", item.fields.isBid), owner: decodeFromFieldsWithTypes(ID.reified(), item.fields.owner), totalQuantity: decodeFromFieldsWithTypes("u64", item.fields.totalQuantity), baseAssetQuantityFilled: decodeFromFieldsWithTypes("u64", item.fields.baseAssetQuantityFilled), baseAssetQuantityRemaining: decodeFromFieldsWithTypes("u64", item.fields.baseAssetQuantityRemaining), price: decodeFromFieldsWithTypes("u64", item.fields.price) } ) }

 static fromBcs<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], data: Uint8Array ): OrderFilled<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return OrderFilled.fromFields( typeArgs, OrderFilled.bcs.parse(data) ) }

 toJSONField() { return {

 poolId: this.poolId,orderId: this.orderId.toString(),isBid: this.isBid,owner: this.owner,totalQuantity: this.totalQuantity.toString(),baseAssetQuantityFilled: this.baseAssetQuantityFilled.toString(),baseAssetQuantityRemaining: this.baseAssetQuantityRemaining.toString(),price: this.price.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], field: any ): OrderFilled<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return OrderFilled.reified( typeArgs[0], typeArgs[1], ).new( { poolId: decodeFromJSONField(ID.reified(), field.poolId), orderId: decodeFromJSONField("u64", field.orderId), isBid: decodeFromJSONField("bool", field.isBid), owner: decodeFromJSONField(ID.reified(), field.owner), totalQuantity: decodeFromJSONField("u64", field.totalQuantity), baseAssetQuantityFilled: decodeFromJSONField("u64", field.baseAssetQuantityFilled), baseAssetQuantityRemaining: decodeFromJSONField("u64", field.baseAssetQuantityRemaining), price: decodeFromJSONField("u64", field.price) } ) }

 static fromJSON<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], json: Record<string, any> ): OrderFilled<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (json.$typeName !== OrderFilled.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(OrderFilled.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return OrderFilled.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], content: SuiParsedData ): OrderFilled<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrderFilled(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OrderFilled object`); } return OrderFilled.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], data: SuiObjectData ): OrderFilled<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOrderFilled(data.bcs.type)) { throw new Error(`object at is not a OrderFilled object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return OrderFilled.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OrderFilled.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [BaseAsset, QuoteAsset], id: string ): Promise<OrderFilled<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OrderFilled object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrderFilled(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OrderFilled object`); }

 return OrderFilled.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== OrderFilledV2 =============================== */

export function isOrderFilledV2(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V21}::clob::OrderFilledV2` + '<'); }

export interface OrderFilledV2Fields<BaseAsset extends PhantomTypeArgument, QuoteAsset extends PhantomTypeArgument> { poolId: ToField<ID>; orderId: ToField<"u64">; isBid: ToField<"bool">; owner: ToField<ID>; totalQuantity: ToField<"u64">; baseAssetQuantityFilled: ToField<"u64">; baseAssetQuantityRemaining: ToField<"u64">; price: ToField<"u64">; takerCommission: ToField<"u64">; makerRebates: ToField<"u64"> }

export type OrderFilledV2Reified<BaseAsset extends PhantomTypeArgument, QuoteAsset extends PhantomTypeArgument> = Reified< OrderFilledV2<BaseAsset, QuoteAsset>, OrderFilledV2Fields<BaseAsset, QuoteAsset> >;

export class OrderFilledV2<BaseAsset extends PhantomTypeArgument, QuoteAsset extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V21}::clob::OrderFilledV2`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = OrderFilledV2.$typeName; readonly $fullTypeName: `${typeof PKG_V21}::clob::OrderFilledV2<${PhantomToTypeStr<BaseAsset>}, ${PhantomToTypeStr<QuoteAsset>}>`; readonly $typeArgs: [PhantomToTypeStr<BaseAsset>, PhantomToTypeStr<QuoteAsset>]; readonly $isPhantom = OrderFilledV2.$isPhantom;

 readonly poolId: ToField<ID>; readonly orderId: ToField<"u64">; readonly isBid: ToField<"bool">; readonly owner: ToField<ID>; readonly totalQuantity: ToField<"u64">; readonly baseAssetQuantityFilled: ToField<"u64">; readonly baseAssetQuantityRemaining: ToField<"u64">; readonly price: ToField<"u64">; readonly takerCommission: ToField<"u64">; readonly makerRebates: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<BaseAsset>, PhantomToTypeStr<QuoteAsset>], fields: OrderFilledV2Fields<BaseAsset, QuoteAsset>, ) { this.$fullTypeName = composeSuiType( OrderFilledV2.$typeName, ...typeArgs ) as `${typeof PKG_V21}::clob::OrderFilledV2<${PhantomToTypeStr<BaseAsset>}, ${PhantomToTypeStr<QuoteAsset>}>`; this.$typeArgs = typeArgs;

 this.poolId = fields.poolId;; this.orderId = fields.orderId;; this.isBid = fields.isBid;; this.owner = fields.owner;; this.totalQuantity = fields.totalQuantity;; this.baseAssetQuantityFilled = fields.baseAssetQuantityFilled;; this.baseAssetQuantityRemaining = fields.baseAssetQuantityRemaining;; this.price = fields.price;; this.takerCommission = fields.takerCommission;; this.makerRebates = fields.makerRebates; }

 static reified<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( BaseAsset: BaseAsset, QuoteAsset: QuoteAsset ): OrderFilledV2Reified<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return { typeName: OrderFilledV2.$typeName, fullTypeName: composeSuiType( OrderFilledV2.$typeName, ...[extractType(BaseAsset), extractType(QuoteAsset)] ) as `${typeof PKG_V21}::clob::OrderFilledV2<${PhantomToTypeStr<ToPhantomTypeArgument<BaseAsset>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<QuoteAsset>>}>`, typeArgs: [ extractType(BaseAsset), extractType(QuoteAsset) ] as [PhantomToTypeStr<ToPhantomTypeArgument<BaseAsset>>, PhantomToTypeStr<ToPhantomTypeArgument<QuoteAsset>>], isPhantom: OrderFilledV2.$isPhantom, reifiedTypeArgs: [BaseAsset, QuoteAsset], fromFields: (fields: Record<string, any>) => OrderFilledV2.fromFields( [BaseAsset, QuoteAsset], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OrderFilledV2.fromFieldsWithTypes( [BaseAsset, QuoteAsset], item, ), fromBcs: (data: Uint8Array) => OrderFilledV2.fromBcs( [BaseAsset, QuoteAsset], data, ), bcs: OrderFilledV2.bcs, fromJSONField: (field: any) => OrderFilledV2.fromJSONField( [BaseAsset, QuoteAsset], field, ), fromJSON: (json: Record<string, any>) => OrderFilledV2.fromJSON( [BaseAsset, QuoteAsset], json, ), fromSuiParsedData: (content: SuiParsedData) => OrderFilledV2.fromSuiParsedData( [BaseAsset, QuoteAsset], content, ), fromSuiObjectData: (content: SuiObjectData) => OrderFilledV2.fromSuiObjectData( [BaseAsset, QuoteAsset], content, ), fetch: async (client: SuiClient, id: string) => OrderFilledV2.fetch( client, [BaseAsset, QuoteAsset], id, ), new: ( fields: OrderFilledV2Fields<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>>, ) => { return new OrderFilledV2( [extractType(BaseAsset), extractType(QuoteAsset)], fields ) }, kind: "StructClassReified", } }

 static get r() { return OrderFilledV2.reified }

 static phantom<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( BaseAsset: BaseAsset, QuoteAsset: QuoteAsset ): PhantomReified<ToTypeStr<OrderFilledV2<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>>>> { return phantom(OrderFilledV2.reified( BaseAsset, QuoteAsset )); } static get p() { return OrderFilledV2.phantom }

 static get bcs() { return bcs.struct("OrderFilledV2", {

 poolId: ID.bcs, orderId: bcs.u64(), isBid: bcs.bool(), owner: ID.bcs, totalQuantity: bcs.u64(), baseAssetQuantityFilled: bcs.u64(), baseAssetQuantityRemaining: bcs.u64(), price: bcs.u64(), takerCommission: bcs.u64(), makerRebates: bcs.u64()

}) };

 static fromFields<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], fields: Record<string, any> ): OrderFilledV2<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return OrderFilledV2.reified( typeArgs[0], typeArgs[1], ).new( { poolId: decodeFromFields(ID.reified(), fields.poolId), orderId: decodeFromFields("u64", fields.orderId), isBid: decodeFromFields("bool", fields.isBid), owner: decodeFromFields(ID.reified(), fields.owner), totalQuantity: decodeFromFields("u64", fields.totalQuantity), baseAssetQuantityFilled: decodeFromFields("u64", fields.baseAssetQuantityFilled), baseAssetQuantityRemaining: decodeFromFields("u64", fields.baseAssetQuantityRemaining), price: decodeFromFields("u64", fields.price), takerCommission: decodeFromFields("u64", fields.takerCommission), makerRebates: decodeFromFields("u64", fields.makerRebates) } ) }

 static fromFieldsWithTypes<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], item: FieldsWithTypes ): OrderFilledV2<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (!isOrderFilledV2(item.type)) { throw new Error("not a OrderFilledV2 type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return OrderFilledV2.reified( typeArgs[0], typeArgs[1], ).new( { poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.poolId), orderId: decodeFromFieldsWithTypes("u64", item.fields.orderId), isBid: decodeFromFieldsWithTypes("bool", item.fields.isBid), owner: decodeFromFieldsWithTypes(ID.reified(), item.fields.owner), totalQuantity: decodeFromFieldsWithTypes("u64", item.fields.totalQuantity), baseAssetQuantityFilled: decodeFromFieldsWithTypes("u64", item.fields.baseAssetQuantityFilled), baseAssetQuantityRemaining: decodeFromFieldsWithTypes("u64", item.fields.baseAssetQuantityRemaining), price: decodeFromFieldsWithTypes("u64", item.fields.price), takerCommission: decodeFromFieldsWithTypes("u64", item.fields.takerCommission), makerRebates: decodeFromFieldsWithTypes("u64", item.fields.makerRebates) } ) }

 static fromBcs<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], data: Uint8Array ): OrderFilledV2<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return OrderFilledV2.fromFields( typeArgs, OrderFilledV2.bcs.parse(data) ) }

 toJSONField() { return {

 poolId: this.poolId,orderId: this.orderId.toString(),isBid: this.isBid,owner: this.owner,totalQuantity: this.totalQuantity.toString(),baseAssetQuantityFilled: this.baseAssetQuantityFilled.toString(),baseAssetQuantityRemaining: this.baseAssetQuantityRemaining.toString(),price: this.price.toString(),takerCommission: this.takerCommission.toString(),makerRebates: this.makerRebates.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], field: any ): OrderFilledV2<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return OrderFilledV2.reified( typeArgs[0], typeArgs[1], ).new( { poolId: decodeFromJSONField(ID.reified(), field.poolId), orderId: decodeFromJSONField("u64", field.orderId), isBid: decodeFromJSONField("bool", field.isBid), owner: decodeFromJSONField(ID.reified(), field.owner), totalQuantity: decodeFromJSONField("u64", field.totalQuantity), baseAssetQuantityFilled: decodeFromJSONField("u64", field.baseAssetQuantityFilled), baseAssetQuantityRemaining: decodeFromJSONField("u64", field.baseAssetQuantityRemaining), price: decodeFromJSONField("u64", field.price), takerCommission: decodeFromJSONField("u64", field.takerCommission), makerRebates: decodeFromJSONField("u64", field.makerRebates) } ) }

 static fromJSON<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], json: Record<string, any> ): OrderFilledV2<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (json.$typeName !== OrderFilledV2.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(OrderFilledV2.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return OrderFilledV2.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], content: SuiParsedData ): OrderFilledV2<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrderFilledV2(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OrderFilledV2 object`); } return OrderFilledV2.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], data: SuiObjectData ): OrderFilledV2<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOrderFilledV2(data.bcs.type)) { throw new Error(`object at is not a OrderFilledV2 object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return OrderFilledV2.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OrderFilledV2.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [BaseAsset, QuoteAsset], id: string ): Promise<OrderFilledV2<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OrderFilledV2 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrderFilledV2(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OrderFilledV2 object`); }

 return OrderFilledV2.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== OrderPlaced =============================== */

export function isOrderPlaced(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V21}::clob::OrderPlaced` + '<'); }

export interface OrderPlacedFields<BaseAsset extends PhantomTypeArgument, QuoteAsset extends PhantomTypeArgument> { poolId: ToField<ID>; orderId: ToField<"u64">; isBid: ToField<"bool">; owner: ToField<ID>; baseAssetQuantityPlaced: ToField<"u64">; price: ToField<"u64"> }

export type OrderPlacedReified<BaseAsset extends PhantomTypeArgument, QuoteAsset extends PhantomTypeArgument> = Reified< OrderPlaced<BaseAsset, QuoteAsset>, OrderPlacedFields<BaseAsset, QuoteAsset> >;

export class OrderPlaced<BaseAsset extends PhantomTypeArgument, QuoteAsset extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V21}::clob::OrderPlaced`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = OrderPlaced.$typeName; readonly $fullTypeName: `${typeof PKG_V21}::clob::OrderPlaced<${PhantomToTypeStr<BaseAsset>}, ${PhantomToTypeStr<QuoteAsset>}>`; readonly $typeArgs: [PhantomToTypeStr<BaseAsset>, PhantomToTypeStr<QuoteAsset>]; readonly $isPhantom = OrderPlaced.$isPhantom;

 readonly poolId: ToField<ID>; readonly orderId: ToField<"u64">; readonly isBid: ToField<"bool">; readonly owner: ToField<ID>; readonly baseAssetQuantityPlaced: ToField<"u64">; readonly price: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<BaseAsset>, PhantomToTypeStr<QuoteAsset>], fields: OrderPlacedFields<BaseAsset, QuoteAsset>, ) { this.$fullTypeName = composeSuiType( OrderPlaced.$typeName, ...typeArgs ) as `${typeof PKG_V21}::clob::OrderPlaced<${PhantomToTypeStr<BaseAsset>}, ${PhantomToTypeStr<QuoteAsset>}>`; this.$typeArgs = typeArgs;

 this.poolId = fields.poolId;; this.orderId = fields.orderId;; this.isBid = fields.isBid;; this.owner = fields.owner;; this.baseAssetQuantityPlaced = fields.baseAssetQuantityPlaced;; this.price = fields.price; }

 static reified<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( BaseAsset: BaseAsset, QuoteAsset: QuoteAsset ): OrderPlacedReified<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return { typeName: OrderPlaced.$typeName, fullTypeName: composeSuiType( OrderPlaced.$typeName, ...[extractType(BaseAsset), extractType(QuoteAsset)] ) as `${typeof PKG_V21}::clob::OrderPlaced<${PhantomToTypeStr<ToPhantomTypeArgument<BaseAsset>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<QuoteAsset>>}>`, typeArgs: [ extractType(BaseAsset), extractType(QuoteAsset) ] as [PhantomToTypeStr<ToPhantomTypeArgument<BaseAsset>>, PhantomToTypeStr<ToPhantomTypeArgument<QuoteAsset>>], isPhantom: OrderPlaced.$isPhantom, reifiedTypeArgs: [BaseAsset, QuoteAsset], fromFields: (fields: Record<string, any>) => OrderPlaced.fromFields( [BaseAsset, QuoteAsset], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OrderPlaced.fromFieldsWithTypes( [BaseAsset, QuoteAsset], item, ), fromBcs: (data: Uint8Array) => OrderPlaced.fromBcs( [BaseAsset, QuoteAsset], data, ), bcs: OrderPlaced.bcs, fromJSONField: (field: any) => OrderPlaced.fromJSONField( [BaseAsset, QuoteAsset], field, ), fromJSON: (json: Record<string, any>) => OrderPlaced.fromJSON( [BaseAsset, QuoteAsset], json, ), fromSuiParsedData: (content: SuiParsedData) => OrderPlaced.fromSuiParsedData( [BaseAsset, QuoteAsset], content, ), fromSuiObjectData: (content: SuiObjectData) => OrderPlaced.fromSuiObjectData( [BaseAsset, QuoteAsset], content, ), fetch: async (client: SuiClient, id: string) => OrderPlaced.fetch( client, [BaseAsset, QuoteAsset], id, ), new: ( fields: OrderPlacedFields<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>>, ) => { return new OrderPlaced( [extractType(BaseAsset), extractType(QuoteAsset)], fields ) }, kind: "StructClassReified", } }

 static get r() { return OrderPlaced.reified }

 static phantom<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( BaseAsset: BaseAsset, QuoteAsset: QuoteAsset ): PhantomReified<ToTypeStr<OrderPlaced<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>>>> { return phantom(OrderPlaced.reified( BaseAsset, QuoteAsset )); } static get p() { return OrderPlaced.phantom }

 static get bcs() { return bcs.struct("OrderPlaced", {

 poolId: ID.bcs, orderId: bcs.u64(), isBid: bcs.bool(), owner: ID.bcs, baseAssetQuantityPlaced: bcs.u64(), price: bcs.u64()

}) };

 static fromFields<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], fields: Record<string, any> ): OrderPlaced<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return OrderPlaced.reified( typeArgs[0], typeArgs[1], ).new( { poolId: decodeFromFields(ID.reified(), fields.poolId), orderId: decodeFromFields("u64", fields.orderId), isBid: decodeFromFields("bool", fields.isBid), owner: decodeFromFields(ID.reified(), fields.owner), baseAssetQuantityPlaced: decodeFromFields("u64", fields.baseAssetQuantityPlaced), price: decodeFromFields("u64", fields.price) } ) }

 static fromFieldsWithTypes<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], item: FieldsWithTypes ): OrderPlaced<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (!isOrderPlaced(item.type)) { throw new Error("not a OrderPlaced type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return OrderPlaced.reified( typeArgs[0], typeArgs[1], ).new( { poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.poolId), orderId: decodeFromFieldsWithTypes("u64", item.fields.orderId), isBid: decodeFromFieldsWithTypes("bool", item.fields.isBid), owner: decodeFromFieldsWithTypes(ID.reified(), item.fields.owner), baseAssetQuantityPlaced: decodeFromFieldsWithTypes("u64", item.fields.baseAssetQuantityPlaced), price: decodeFromFieldsWithTypes("u64", item.fields.price) } ) }

 static fromBcs<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], data: Uint8Array ): OrderPlaced<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return OrderPlaced.fromFields( typeArgs, OrderPlaced.bcs.parse(data) ) }

 toJSONField() { return {

 poolId: this.poolId,orderId: this.orderId.toString(),isBid: this.isBid,owner: this.owner,baseAssetQuantityPlaced: this.baseAssetQuantityPlaced.toString(),price: this.price.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], field: any ): OrderPlaced<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return OrderPlaced.reified( typeArgs[0], typeArgs[1], ).new( { poolId: decodeFromJSONField(ID.reified(), field.poolId), orderId: decodeFromJSONField("u64", field.orderId), isBid: decodeFromJSONField("bool", field.isBid), owner: decodeFromJSONField(ID.reified(), field.owner), baseAssetQuantityPlaced: decodeFromJSONField("u64", field.baseAssetQuantityPlaced), price: decodeFromJSONField("u64", field.price) } ) }

 static fromJSON<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], json: Record<string, any> ): OrderPlaced<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (json.$typeName !== OrderPlaced.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(OrderPlaced.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return OrderPlaced.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], content: SuiParsedData ): OrderPlaced<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrderPlaced(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OrderPlaced object`); } return OrderPlaced.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], data: SuiObjectData ): OrderPlaced<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOrderPlaced(data.bcs.type)) { throw new Error(`object at is not a OrderPlaced object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return OrderPlaced.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OrderPlaced.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [BaseAsset, QuoteAsset], id: string ): Promise<OrderPlaced<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OrderPlaced object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrderPlaced(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OrderPlaced object`); }

 return OrderPlaced.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== OrderPlacedV2 =============================== */

export function isOrderPlacedV2(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V21}::clob::OrderPlacedV2` + '<'); }

export interface OrderPlacedV2Fields<BaseAsset extends PhantomTypeArgument, QuoteAsset extends PhantomTypeArgument> { poolId: ToField<ID>; orderId: ToField<"u64">; isBid: ToField<"bool">; owner: ToField<ID>; baseAssetQuantityPlaced: ToField<"u64">; price: ToField<"u64">; expireTimestamp: ToField<"u64"> }

export type OrderPlacedV2Reified<BaseAsset extends PhantomTypeArgument, QuoteAsset extends PhantomTypeArgument> = Reified< OrderPlacedV2<BaseAsset, QuoteAsset>, OrderPlacedV2Fields<BaseAsset, QuoteAsset> >;

export class OrderPlacedV2<BaseAsset extends PhantomTypeArgument, QuoteAsset extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V21}::clob::OrderPlacedV2`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = OrderPlacedV2.$typeName; readonly $fullTypeName: `${typeof PKG_V21}::clob::OrderPlacedV2<${PhantomToTypeStr<BaseAsset>}, ${PhantomToTypeStr<QuoteAsset>}>`; readonly $typeArgs: [PhantomToTypeStr<BaseAsset>, PhantomToTypeStr<QuoteAsset>]; readonly $isPhantom = OrderPlacedV2.$isPhantom;

 readonly poolId: ToField<ID>; readonly orderId: ToField<"u64">; readonly isBid: ToField<"bool">; readonly owner: ToField<ID>; readonly baseAssetQuantityPlaced: ToField<"u64">; readonly price: ToField<"u64">; readonly expireTimestamp: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<BaseAsset>, PhantomToTypeStr<QuoteAsset>], fields: OrderPlacedV2Fields<BaseAsset, QuoteAsset>, ) { this.$fullTypeName = composeSuiType( OrderPlacedV2.$typeName, ...typeArgs ) as `${typeof PKG_V21}::clob::OrderPlacedV2<${PhantomToTypeStr<BaseAsset>}, ${PhantomToTypeStr<QuoteAsset>}>`; this.$typeArgs = typeArgs;

 this.poolId = fields.poolId;; this.orderId = fields.orderId;; this.isBid = fields.isBid;; this.owner = fields.owner;; this.baseAssetQuantityPlaced = fields.baseAssetQuantityPlaced;; this.price = fields.price;; this.expireTimestamp = fields.expireTimestamp; }

 static reified<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( BaseAsset: BaseAsset, QuoteAsset: QuoteAsset ): OrderPlacedV2Reified<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return { typeName: OrderPlacedV2.$typeName, fullTypeName: composeSuiType( OrderPlacedV2.$typeName, ...[extractType(BaseAsset), extractType(QuoteAsset)] ) as `${typeof PKG_V21}::clob::OrderPlacedV2<${PhantomToTypeStr<ToPhantomTypeArgument<BaseAsset>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<QuoteAsset>>}>`, typeArgs: [ extractType(BaseAsset), extractType(QuoteAsset) ] as [PhantomToTypeStr<ToPhantomTypeArgument<BaseAsset>>, PhantomToTypeStr<ToPhantomTypeArgument<QuoteAsset>>], isPhantom: OrderPlacedV2.$isPhantom, reifiedTypeArgs: [BaseAsset, QuoteAsset], fromFields: (fields: Record<string, any>) => OrderPlacedV2.fromFields( [BaseAsset, QuoteAsset], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OrderPlacedV2.fromFieldsWithTypes( [BaseAsset, QuoteAsset], item, ), fromBcs: (data: Uint8Array) => OrderPlacedV2.fromBcs( [BaseAsset, QuoteAsset], data, ), bcs: OrderPlacedV2.bcs, fromJSONField: (field: any) => OrderPlacedV2.fromJSONField( [BaseAsset, QuoteAsset], field, ), fromJSON: (json: Record<string, any>) => OrderPlacedV2.fromJSON( [BaseAsset, QuoteAsset], json, ), fromSuiParsedData: (content: SuiParsedData) => OrderPlacedV2.fromSuiParsedData( [BaseAsset, QuoteAsset], content, ), fromSuiObjectData: (content: SuiObjectData) => OrderPlacedV2.fromSuiObjectData( [BaseAsset, QuoteAsset], content, ), fetch: async (client: SuiClient, id: string) => OrderPlacedV2.fetch( client, [BaseAsset, QuoteAsset], id, ), new: ( fields: OrderPlacedV2Fields<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>>, ) => { return new OrderPlacedV2( [extractType(BaseAsset), extractType(QuoteAsset)], fields ) }, kind: "StructClassReified", } }

 static get r() { return OrderPlacedV2.reified }

 static phantom<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( BaseAsset: BaseAsset, QuoteAsset: QuoteAsset ): PhantomReified<ToTypeStr<OrderPlacedV2<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>>>> { return phantom(OrderPlacedV2.reified( BaseAsset, QuoteAsset )); } static get p() { return OrderPlacedV2.phantom }

 static get bcs() { return bcs.struct("OrderPlacedV2", {

 poolId: ID.bcs, orderId: bcs.u64(), isBid: bcs.bool(), owner: ID.bcs, baseAssetQuantityPlaced: bcs.u64(), price: bcs.u64(), expireTimestamp: bcs.u64()

}) };

 static fromFields<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], fields: Record<string, any> ): OrderPlacedV2<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return OrderPlacedV2.reified( typeArgs[0], typeArgs[1], ).new( { poolId: decodeFromFields(ID.reified(), fields.poolId), orderId: decodeFromFields("u64", fields.orderId), isBid: decodeFromFields("bool", fields.isBid), owner: decodeFromFields(ID.reified(), fields.owner), baseAssetQuantityPlaced: decodeFromFields("u64", fields.baseAssetQuantityPlaced), price: decodeFromFields("u64", fields.price), expireTimestamp: decodeFromFields("u64", fields.expireTimestamp) } ) }

 static fromFieldsWithTypes<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], item: FieldsWithTypes ): OrderPlacedV2<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (!isOrderPlacedV2(item.type)) { throw new Error("not a OrderPlacedV2 type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return OrderPlacedV2.reified( typeArgs[0], typeArgs[1], ).new( { poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.poolId), orderId: decodeFromFieldsWithTypes("u64", item.fields.orderId), isBid: decodeFromFieldsWithTypes("bool", item.fields.isBid), owner: decodeFromFieldsWithTypes(ID.reified(), item.fields.owner), baseAssetQuantityPlaced: decodeFromFieldsWithTypes("u64", item.fields.baseAssetQuantityPlaced), price: decodeFromFieldsWithTypes("u64", item.fields.price), expireTimestamp: decodeFromFieldsWithTypes("u64", item.fields.expireTimestamp) } ) }

 static fromBcs<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], data: Uint8Array ): OrderPlacedV2<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return OrderPlacedV2.fromFields( typeArgs, OrderPlacedV2.bcs.parse(data) ) }

 toJSONField() { return {

 poolId: this.poolId,orderId: this.orderId.toString(),isBid: this.isBid,owner: this.owner,baseAssetQuantityPlaced: this.baseAssetQuantityPlaced.toString(),price: this.price.toString(),expireTimestamp: this.expireTimestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], field: any ): OrderPlacedV2<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return OrderPlacedV2.reified( typeArgs[0], typeArgs[1], ).new( { poolId: decodeFromJSONField(ID.reified(), field.poolId), orderId: decodeFromJSONField("u64", field.orderId), isBid: decodeFromJSONField("bool", field.isBid), owner: decodeFromJSONField(ID.reified(), field.owner), baseAssetQuantityPlaced: decodeFromJSONField("u64", field.baseAssetQuantityPlaced), price: decodeFromJSONField("u64", field.price), expireTimestamp: decodeFromJSONField("u64", field.expireTimestamp) } ) }

 static fromJSON<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], json: Record<string, any> ): OrderPlacedV2<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (json.$typeName !== OrderPlacedV2.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(OrderPlacedV2.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return OrderPlacedV2.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], content: SuiParsedData ): OrderPlacedV2<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOrderPlacedV2(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OrderPlacedV2 object`); } return OrderPlacedV2.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], data: SuiObjectData ): OrderPlacedV2<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOrderPlacedV2(data.bcs.type)) { throw new Error(`object at is not a OrderPlacedV2 object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return OrderPlacedV2.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OrderPlacedV2.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [BaseAsset, QuoteAsset], id: string ): Promise<OrderPlacedV2<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OrderPlacedV2 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOrderPlacedV2(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OrderPlacedV2 object`); }

 return OrderPlacedV2.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== Pool =============================== */

export function isPool(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V21}::clob::Pool` + '<'); }

export interface PoolFields<BaseAsset extends PhantomTypeArgument, QuoteAsset extends PhantomTypeArgument> { id: ToField<UID>; bids: ToField<CritbitTree<TickLevel>>; asks: ToField<CritbitTree<TickLevel>>; nextBidOrderId: ToField<"u64">; nextAskOrderId: ToField<"u64">; usrOpenOrders: ToField<Table<ToPhantom<ID>, ToPhantom<LinkedTable<"u64", "u64">>>>; takerFeeRate: ToField<"u64">; makerRebateRate: ToField<"u64">; tickSize: ToField<"u64">; lotSize: ToField<"u64">; baseCustodian: ToField<Custodian<BaseAsset>>; quoteCustodian: ToField<Custodian<QuoteAsset>>; creationFee: ToField<Balance<ToPhantom<SUI>>>; baseAssetTradingFees: ToField<Balance<BaseAsset>>; quoteAssetTradingFees: ToField<Balance<QuoteAsset>> }

export type PoolReified<BaseAsset extends PhantomTypeArgument, QuoteAsset extends PhantomTypeArgument> = Reified< Pool<BaseAsset, QuoteAsset>, PoolFields<BaseAsset, QuoteAsset> >;

export class Pool<BaseAsset extends PhantomTypeArgument, QuoteAsset extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V21}::clob::Pool`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = Pool.$typeName; readonly $fullTypeName: `${typeof PKG_V21}::clob::Pool<${PhantomToTypeStr<BaseAsset>}, ${PhantomToTypeStr<QuoteAsset>}>`; readonly $typeArgs: [PhantomToTypeStr<BaseAsset>, PhantomToTypeStr<QuoteAsset>]; readonly $isPhantom = Pool.$isPhantom;

 readonly id: ToField<UID>; readonly bids: ToField<CritbitTree<TickLevel>>; readonly asks: ToField<CritbitTree<TickLevel>>; readonly nextBidOrderId: ToField<"u64">; readonly nextAskOrderId: ToField<"u64">; readonly usrOpenOrders: ToField<Table<ToPhantom<ID>, ToPhantom<LinkedTable<"u64", "u64">>>>; readonly takerFeeRate: ToField<"u64">; readonly makerRebateRate: ToField<"u64">; readonly tickSize: ToField<"u64">; readonly lotSize: ToField<"u64">; readonly baseCustodian: ToField<Custodian<BaseAsset>>; readonly quoteCustodian: ToField<Custodian<QuoteAsset>>; readonly creationFee: ToField<Balance<ToPhantom<SUI>>>; readonly baseAssetTradingFees: ToField<Balance<BaseAsset>>; readonly quoteAssetTradingFees: ToField<Balance<QuoteAsset>>

 private constructor(typeArgs: [PhantomToTypeStr<BaseAsset>, PhantomToTypeStr<QuoteAsset>], fields: PoolFields<BaseAsset, QuoteAsset>, ) { this.$fullTypeName = composeSuiType( Pool.$typeName, ...typeArgs ) as `${typeof PKG_V21}::clob::Pool<${PhantomToTypeStr<BaseAsset>}, ${PhantomToTypeStr<QuoteAsset>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.bids = fields.bids;; this.asks = fields.asks;; this.nextBidOrderId = fields.nextBidOrderId;; this.nextAskOrderId = fields.nextAskOrderId;; this.usrOpenOrders = fields.usrOpenOrders;; this.takerFeeRate = fields.takerFeeRate;; this.makerRebateRate = fields.makerRebateRate;; this.tickSize = fields.tickSize;; this.lotSize = fields.lotSize;; this.baseCustodian = fields.baseCustodian;; this.quoteCustodian = fields.quoteCustodian;; this.creationFee = fields.creationFee;; this.baseAssetTradingFees = fields.baseAssetTradingFees;; this.quoteAssetTradingFees = fields.quoteAssetTradingFees; }

 static reified<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( BaseAsset: BaseAsset, QuoteAsset: QuoteAsset ): PoolReified<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return { typeName: Pool.$typeName, fullTypeName: composeSuiType( Pool.$typeName, ...[extractType(BaseAsset), extractType(QuoteAsset)] ) as `${typeof PKG_V21}::clob::Pool<${PhantomToTypeStr<ToPhantomTypeArgument<BaseAsset>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<QuoteAsset>>}>`, typeArgs: [ extractType(BaseAsset), extractType(QuoteAsset) ] as [PhantomToTypeStr<ToPhantomTypeArgument<BaseAsset>>, PhantomToTypeStr<ToPhantomTypeArgument<QuoteAsset>>], isPhantom: Pool.$isPhantom, reifiedTypeArgs: [BaseAsset, QuoteAsset], fromFields: (fields: Record<string, any>) => Pool.fromFields( [BaseAsset, QuoteAsset], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Pool.fromFieldsWithTypes( [BaseAsset, QuoteAsset], item, ), fromBcs: (data: Uint8Array) => Pool.fromBcs( [BaseAsset, QuoteAsset], data, ), bcs: Pool.bcs, fromJSONField: (field: any) => Pool.fromJSONField( [BaseAsset, QuoteAsset], field, ), fromJSON: (json: Record<string, any>) => Pool.fromJSON( [BaseAsset, QuoteAsset], json, ), fromSuiParsedData: (content: SuiParsedData) => Pool.fromSuiParsedData( [BaseAsset, QuoteAsset], content, ), fromSuiObjectData: (content: SuiObjectData) => Pool.fromSuiObjectData( [BaseAsset, QuoteAsset], content, ), fetch: async (client: SuiClient, id: string) => Pool.fetch( client, [BaseAsset, QuoteAsset], id, ), new: ( fields: PoolFields<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>>, ) => { return new Pool( [extractType(BaseAsset), extractType(QuoteAsset)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Pool.reified }

 static phantom<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( BaseAsset: BaseAsset, QuoteAsset: QuoteAsset ): PhantomReified<ToTypeStr<Pool<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>>>> { return phantom(Pool.reified( BaseAsset, QuoteAsset )); } static get p() { return Pool.phantom }

 static get bcs() { return bcs.struct("Pool", {

 id: UID.bcs, bids: CritbitTree.bcs(TickLevel.bcs), asks: CritbitTree.bcs(TickLevel.bcs), nextBidOrderId: bcs.u64(), nextAskOrderId: bcs.u64(), usrOpenOrders: Table.bcs, takerFeeRate: bcs.u64(), makerRebateRate: bcs.u64(), tickSize: bcs.u64(), lotSize: bcs.u64(), baseCustodian: Custodian.bcs, quoteCustodian: Custodian.bcs, creationFee: Balance.bcs, baseAssetTradingFees: Balance.bcs, quoteAssetTradingFees: Balance.bcs

}) };

 static fromFields<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], fields: Record<string, any> ): Pool<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return Pool.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromFields(UID.reified(), fields.id), bids: decodeFromFields(CritbitTree.reified(TickLevel.reified()), fields.bids), asks: decodeFromFields(CritbitTree.reified(TickLevel.reified()), fields.asks), nextBidOrderId: decodeFromFields("u64", fields.nextBidOrderId), nextAskOrderId: decodeFromFields("u64", fields.nextAskOrderId), usrOpenOrders: decodeFromFields(Table.reified(reified.phantom(ID.reified()), reified.phantom(LinkedTable.reified("u64", reified.phantom("u64")))), fields.usrOpenOrders), takerFeeRate: decodeFromFields("u64", fields.takerFeeRate), makerRebateRate: decodeFromFields("u64", fields.makerRebateRate), tickSize: decodeFromFields("u64", fields.tickSize), lotSize: decodeFromFields("u64", fields.lotSize), baseCustodian: decodeFromFields(Custodian.reified(typeArgs[0]), fields.baseCustodian), quoteCustodian: decodeFromFields(Custodian.reified(typeArgs[1]), fields.quoteCustodian), creationFee: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.creationFee), baseAssetTradingFees: decodeFromFields(Balance.reified(typeArgs[0]), fields.baseAssetTradingFees), quoteAssetTradingFees: decodeFromFields(Balance.reified(typeArgs[1]), fields.quoteAssetTradingFees) } ) }

 static fromFieldsWithTypes<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], item: FieldsWithTypes ): Pool<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (!isPool(item.type)) { throw new Error("not a Pool type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return Pool.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), bids: decodeFromFieldsWithTypes(CritbitTree.reified(TickLevel.reified()), item.fields.bids), asks: decodeFromFieldsWithTypes(CritbitTree.reified(TickLevel.reified()), item.fields.asks), nextBidOrderId: decodeFromFieldsWithTypes("u64", item.fields.nextBidOrderId), nextAskOrderId: decodeFromFieldsWithTypes("u64", item.fields.nextAskOrderId), usrOpenOrders: decodeFromFieldsWithTypes(Table.reified(reified.phantom(ID.reified()), reified.phantom(LinkedTable.reified("u64", reified.phantom("u64")))), item.fields.usrOpenOrders), takerFeeRate: decodeFromFieldsWithTypes("u64", item.fields.takerFeeRate), makerRebateRate: decodeFromFieldsWithTypes("u64", item.fields.makerRebateRate), tickSize: decodeFromFieldsWithTypes("u64", item.fields.tickSize), lotSize: decodeFromFieldsWithTypes("u64", item.fields.lotSize), baseCustodian: decodeFromFieldsWithTypes(Custodian.reified(typeArgs[0]), item.fields.baseCustodian), quoteCustodian: decodeFromFieldsWithTypes(Custodian.reified(typeArgs[1]), item.fields.quoteCustodian), creationFee: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.creationFee), baseAssetTradingFees: decodeFromFieldsWithTypes(Balance.reified(typeArgs[0]), item.fields.baseAssetTradingFees), quoteAssetTradingFees: decodeFromFieldsWithTypes(Balance.reified(typeArgs[1]), item.fields.quoteAssetTradingFees) } ) }

 static fromBcs<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], data: Uint8Array ): Pool<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return Pool.fromFields( typeArgs, Pool.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,bids: this.bids.toJSONField(),asks: this.asks.toJSONField(),nextBidOrderId: this.nextBidOrderId.toString(),nextAskOrderId: this.nextAskOrderId.toString(),usrOpenOrders: this.usrOpenOrders.toJSONField(),takerFeeRate: this.takerFeeRate.toString(),makerRebateRate: this.makerRebateRate.toString(),tickSize: this.tickSize.toString(),lotSize: this.lotSize.toString(),baseCustodian: this.baseCustodian.toJSONField(),quoteCustodian: this.quoteCustodian.toJSONField(),creationFee: this.creationFee.toJSONField(),baseAssetTradingFees: this.baseAssetTradingFees.toJSONField(),quoteAssetTradingFees: this.quoteAssetTradingFees.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], field: any ): Pool<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { return Pool.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromJSONField(UID.reified(), field.id), bids: decodeFromJSONField(CritbitTree.reified(TickLevel.reified()), field.bids), asks: decodeFromJSONField(CritbitTree.reified(TickLevel.reified()), field.asks), nextBidOrderId: decodeFromJSONField("u64", field.nextBidOrderId), nextAskOrderId: decodeFromJSONField("u64", field.nextAskOrderId), usrOpenOrders: decodeFromJSONField(Table.reified(reified.phantom(ID.reified()), reified.phantom(LinkedTable.reified("u64", reified.phantom("u64")))), field.usrOpenOrders), takerFeeRate: decodeFromJSONField("u64", field.takerFeeRate), makerRebateRate: decodeFromJSONField("u64", field.makerRebateRate), tickSize: decodeFromJSONField("u64", field.tickSize), lotSize: decodeFromJSONField("u64", field.lotSize), baseCustodian: decodeFromJSONField(Custodian.reified(typeArgs[0]), field.baseCustodian), quoteCustodian: decodeFromJSONField(Custodian.reified(typeArgs[1]), field.quoteCustodian), creationFee: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.creationFee), baseAssetTradingFees: decodeFromJSONField(Balance.reified(typeArgs[0]), field.baseAssetTradingFees), quoteAssetTradingFees: decodeFromJSONField(Balance.reified(typeArgs[1]), field.quoteAssetTradingFees) } ) }

 static fromJSON<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], json: Record<string, any> ): Pool<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (json.$typeName !== Pool.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Pool.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return Pool.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], content: SuiParsedData ): Pool<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPool(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Pool object`); } return Pool.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( typeArgs: [BaseAsset, QuoteAsset], data: SuiObjectData ): Pool<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPool(data.bcs.type)) { throw new Error(`object at is not a Pool object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return Pool.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Pool.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<BaseAsset extends PhantomReified<PhantomTypeArgument>, QuoteAsset extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [BaseAsset, QuoteAsset], id: string ): Promise<Pool<ToPhantomTypeArgument<BaseAsset>, ToPhantomTypeArgument<QuoteAsset>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Pool object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPool(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Pool object`); }

 return Pool.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== PoolCreated =============================== */

export function isPoolCreated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V21}::clob::PoolCreated`; }

export interface PoolCreatedFields { poolId: ToField<ID>; baseAsset: ToField<TypeName>; quoteAsset: ToField<TypeName>; takerFeeRate: ToField<"u64">; makerRebateRate: ToField<"u64">; tickSize: ToField<"u64">; lotSize: ToField<"u64"> }

export type PoolCreatedReified = Reified< PoolCreated, PoolCreatedFields >;

export class PoolCreated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V21}::clob::PoolCreated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = PoolCreated.$typeName; readonly $fullTypeName: `${typeof PKG_V21}::clob::PoolCreated`; readonly $typeArgs: []; readonly $isPhantom = PoolCreated.$isPhantom;

 readonly poolId: ToField<ID>; readonly baseAsset: ToField<TypeName>; readonly quoteAsset: ToField<TypeName>; readonly takerFeeRate: ToField<"u64">; readonly makerRebateRate: ToField<"u64">; readonly tickSize: ToField<"u64">; readonly lotSize: ToField<"u64">

 private constructor(typeArgs: [], fields: PoolCreatedFields, ) { this.$fullTypeName = composeSuiType( PoolCreated.$typeName, ...typeArgs ) as `${typeof PKG_V21}::clob::PoolCreated`; this.$typeArgs = typeArgs;

 this.poolId = fields.poolId;; this.baseAsset = fields.baseAsset;; this.quoteAsset = fields.quoteAsset;; this.takerFeeRate = fields.takerFeeRate;; this.makerRebateRate = fields.makerRebateRate;; this.tickSize = fields.tickSize;; this.lotSize = fields.lotSize; }

 static reified( ): PoolCreatedReified { return { typeName: PoolCreated.$typeName, fullTypeName: composeSuiType( PoolCreated.$typeName, ...[] ) as `${typeof PKG_V21}::clob::PoolCreated`, typeArgs: [ ] as [], isPhantom: PoolCreated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PoolCreated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PoolCreated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PoolCreated.fromBcs( data, ), bcs: PoolCreated.bcs, fromJSONField: (field: any) => PoolCreated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PoolCreated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PoolCreated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => PoolCreated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => PoolCreated.fetch( client, id, ), new: ( fields: PoolCreatedFields, ) => { return new PoolCreated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PoolCreated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PoolCreated>> { return phantom(PoolCreated.reified( )); } static get p() { return PoolCreated.phantom() }

 static get bcs() { return bcs.struct("PoolCreated", {

 poolId: ID.bcs, baseAsset: TypeName.bcs, quoteAsset: TypeName.bcs, takerFeeRate: bcs.u64(), makerRebateRate: bcs.u64(), tickSize: bcs.u64(), lotSize: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): PoolCreated { return PoolCreated.reified( ).new( { poolId: decodeFromFields(ID.reified(), fields.poolId), baseAsset: decodeFromFields(TypeName.reified(), fields.baseAsset), quoteAsset: decodeFromFields(TypeName.reified(), fields.quoteAsset), takerFeeRate: decodeFromFields("u64", fields.takerFeeRate), makerRebateRate: decodeFromFields("u64", fields.makerRebateRate), tickSize: decodeFromFields("u64", fields.tickSize), lotSize: decodeFromFields("u64", fields.lotSize) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PoolCreated { if (!isPoolCreated(item.type)) { throw new Error("not a PoolCreated type");

 }

 return PoolCreated.reified( ).new( { poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.poolId), baseAsset: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.baseAsset), quoteAsset: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.quoteAsset), takerFeeRate: decodeFromFieldsWithTypes("u64", item.fields.takerFeeRate), makerRebateRate: decodeFromFieldsWithTypes("u64", item.fields.makerRebateRate), tickSize: decodeFromFieldsWithTypes("u64", item.fields.tickSize), lotSize: decodeFromFieldsWithTypes("u64", item.fields.lotSize) } ) }

 static fromBcs( data: Uint8Array ): PoolCreated { return PoolCreated.fromFields( PoolCreated.bcs.parse(data) ) }

 toJSONField() { return {

 poolId: this.poolId,baseAsset: this.baseAsset.toJSONField(),quoteAsset: this.quoteAsset.toJSONField(),takerFeeRate: this.takerFeeRate.toString(),makerRebateRate: this.makerRebateRate.toString(),tickSize: this.tickSize.toString(),lotSize: this.lotSize.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PoolCreated { return PoolCreated.reified( ).new( { poolId: decodeFromJSONField(ID.reified(), field.poolId), baseAsset: decodeFromJSONField(TypeName.reified(), field.baseAsset), quoteAsset: decodeFromJSONField(TypeName.reified(), field.quoteAsset), takerFeeRate: decodeFromJSONField("u64", field.takerFeeRate), makerRebateRate: decodeFromJSONField("u64", field.makerRebateRate), tickSize: decodeFromJSONField("u64", field.tickSize), lotSize: decodeFromJSONField("u64", field.lotSize) } ) }

 static fromJSON( json: Record<string, any> ): PoolCreated { if (json.$typeName !== PoolCreated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PoolCreated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PoolCreated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPoolCreated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PoolCreated object`); } return PoolCreated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): PoolCreated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPoolCreated(data.bcs.type)) { throw new Error(`object at is not a PoolCreated object`); }

 return PoolCreated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PoolCreated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<PoolCreated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PoolCreated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPoolCreated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PoolCreated object`); }

 return PoolCreated.fromSuiObjectData( res.data ); }

 }

/* ============================== TickLevel =============================== */

export function isTickLevel(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V21}::clob::TickLevel`; }

export interface TickLevelFields { price: ToField<"u64">; openOrders: ToField<LinkedTable<"u64", ToPhantom<Order>>> }

export type TickLevelReified = Reified< TickLevel, TickLevelFields >;

export class TickLevel implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V21}::clob::TickLevel`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TickLevel.$typeName; readonly $fullTypeName: `${typeof PKG_V21}::clob::TickLevel`; readonly $typeArgs: []; readonly $isPhantom = TickLevel.$isPhantom;

 readonly price: ToField<"u64">; readonly openOrders: ToField<LinkedTable<"u64", ToPhantom<Order>>>

 private constructor(typeArgs: [], fields: TickLevelFields, ) { this.$fullTypeName = composeSuiType( TickLevel.$typeName, ...typeArgs ) as `${typeof PKG_V21}::clob::TickLevel`; this.$typeArgs = typeArgs;

 this.price = fields.price;; this.openOrders = fields.openOrders; }

 static reified( ): TickLevelReified { return { typeName: TickLevel.$typeName, fullTypeName: composeSuiType( TickLevel.$typeName, ...[] ) as `${typeof PKG_V21}::clob::TickLevel`, typeArgs: [ ] as [], isPhantom: TickLevel.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TickLevel.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TickLevel.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TickLevel.fromBcs( data, ), bcs: TickLevel.bcs, fromJSONField: (field: any) => TickLevel.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TickLevel.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TickLevel.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TickLevel.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TickLevel.fetch( client, id, ), new: ( fields: TickLevelFields, ) => { return new TickLevel( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TickLevel.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TickLevel>> { return phantom(TickLevel.reified( )); } static get p() { return TickLevel.phantom() }

 static get bcs() { return bcs.struct("TickLevel", {

 price: bcs.u64(), openOrders: LinkedTable.bcs(bcs.u64())

}) };

 static fromFields( fields: Record<string, any> ): TickLevel { return TickLevel.reified( ).new( { price: decodeFromFields("u64", fields.price), openOrders: decodeFromFields(LinkedTable.reified("u64", reified.phantom(Order.reified())), fields.openOrders) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TickLevel { if (!isTickLevel(item.type)) { throw new Error("not a TickLevel type");

 }

 return TickLevel.reified( ).new( { price: decodeFromFieldsWithTypes("u64", item.fields.price), openOrders: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(Order.reified())), item.fields.openOrders) } ) }

 static fromBcs( data: Uint8Array ): TickLevel { return TickLevel.fromFields( TickLevel.bcs.parse(data) ) }

 toJSONField() { return {

 price: this.price.toString(),openOrders: this.openOrders.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TickLevel { return TickLevel.reified( ).new( { price: decodeFromJSONField("u64", field.price), openOrders: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(Order.reified())), field.openOrders) } ) }

 static fromJSON( json: Record<string, any> ): TickLevel { if (json.$typeName !== TickLevel.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TickLevel.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TickLevel { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTickLevel(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TickLevel object`); } return TickLevel.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TickLevel { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTickLevel(data.bcs.type)) { throw new Error(`object at is not a TickLevel object`); }

 return TickLevel.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TickLevel.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TickLevel> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TickLevel object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTickLevel(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TickLevel object`); }

 return TickLevel.fromSuiObjectData( res.data ); }

 }
