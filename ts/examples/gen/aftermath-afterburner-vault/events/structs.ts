import * as reified from "../../_framework/reified";
import {String} from "../../_dependencies/onchain/0x1/ascii/structs";
import {ID} from "../../_dependencies/onchain/0x2/object/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, toBcs} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {Vector} from "../../_framework/vector";
import {PKG_V1} from "../index";
import {BcsType, bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Event =============================== */

export function isEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::events::Event` + '<'); }

export interface EventFields<T0 extends TypeArgument> { pos0: ToField<T0> }

export type EventReified<T0 extends TypeArgument> = Reified< Event<T0>, EventFields<T0> >;

export class Event<T0 extends TypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::Event`; static readonly $numTypeParams = 1; static readonly $isPhantom = [false,] as const;

 readonly $typeName = Event.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::Event<${ToTypeStr<T0>}>`; readonly $typeArgs: [ToTypeStr<T0>]; readonly $isPhantom = Event.$isPhantom;

 readonly pos0: ToField<T0>

 private constructor(typeArgs: [ToTypeStr<T0>], fields: EventFields<T0>, ) { this.$fullTypeName = composeSuiType( Event.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::Event<${ToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.pos0 = fields.pos0; }

 static reified<T0 extends Reified<TypeArgument, any>>( T0: T0 ): EventReified<ToTypeArgument<T0>> { return { typeName: Event.$typeName, fullTypeName: composeSuiType( Event.$typeName, ...[extractType(T0)] ) as `${typeof PKG_V1}::events::Event<${ToTypeStr<ToTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [ToTypeStr<ToTypeArgument<T0>>], isPhantom: Event.$isPhantom, reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => Event.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Event.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => Event.fromBcs( T0, data, ), bcs: Event.bcs(toBcs(T0)), fromJSONField: (field: any) => Event.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => Event.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => Event.fromSuiParsedData( T0, content, ), fromSuiObjectData: (content: SuiObjectData) => Event.fromSuiObjectData( T0, content, ), fetch: async (client: SuiClient, id: string) => Event.fetch( client, T0, id, ), new: ( fields: EventFields<ToTypeArgument<T0>>, ) => { return new Event( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Event.reified }

 static phantom<T0 extends Reified<TypeArgument, any>>( T0: T0 ): PhantomReified<ToTypeStr<Event<ToTypeArgument<T0>>>> { return phantom(Event.reified( T0 )); } static get p() { return Event.phantom }

 static get bcs() { return <T0 extends BcsType<any>>(T0: T0) => bcs.struct(`Event<${T0.name}>`, {

 pos0: T0

}) };

 static fromFields<T0 extends Reified<TypeArgument, any>>( typeArg: T0, fields: Record<string, any> ): Event<ToTypeArgument<T0>> { return Event.reified( typeArg, ).new( { pos0: decodeFromFields(typeArg, fields.pos0) } ) }

 static fromFieldsWithTypes<T0 extends Reified<TypeArgument, any>>( typeArg: T0, item: FieldsWithTypes ): Event<ToTypeArgument<T0>> { if (!isEvent(item.type)) { throw new Error("not a Event type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Event.reified( typeArg, ).new( { pos0: decodeFromFieldsWithTypes(typeArg, item.fields.pos0) } ) }

 static fromBcs<T0 extends Reified<TypeArgument, any>>( typeArg: T0, data: Uint8Array ): Event<ToTypeArgument<T0>> { const typeArgs = [typeArg];

 return Event.fromFields( typeArg, Event.bcs( toBcs(typeArgs[0]) ).parse(data) ) }

 toJSONField() { return {

 pos0: fieldToJSON<T0>(this.$typeArgs[0], this.pos0),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends Reified<TypeArgument, any>>( typeArg: T0, field: any ): Event<ToTypeArgument<T0>> { return Event.reified( typeArg, ).new( { pos0: decodeFromJSONField(typeArg, field.pos0) } ) }

 static fromJSON<T0 extends Reified<TypeArgument, any>>( typeArg: T0, json: Record<string, any> ): Event<ToTypeArgument<T0>> { if (json.$typeName !== Event.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Event.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Event.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends Reified<TypeArgument, any>>( typeArg: T0, content: SuiParsedData ): Event<ToTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Event object`); } return Event.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T0 extends Reified<TypeArgument, any>>( typeArg: T0, data: SuiObjectData ): Event<ToTypeArgument<T0>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isEvent(data.bcs.type)) { throw new Error(`object at is not a Event object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return Event.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Event.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends Reified<TypeArgument, any>>( client: SuiClient, typeArg: T0, id: string ): Promise<Event<ToTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Event object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Event object`); }

 return Event.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== CreatedVaultEventV1 =============================== */

export function isCreatedVaultEventV1(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::events::CreatedVaultEventV1`; }

export interface CreatedVaultEventV1Fields { vaultId: ToField<ID>; stakeType: ToField<String>; supportedLockEnforcements: ToField<Vector<"u8">>; minLockDurationMs: ToField<"u64">; maxLockDurationMs: ToField<"u64">; maxLockMultiplier: ToField<"u64">; minStakeAmount: ToField<"u64"> }

export type CreatedVaultEventV1Reified = Reified< CreatedVaultEventV1, CreatedVaultEventV1Fields >;

export class CreatedVaultEventV1 implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::CreatedVaultEventV1`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = CreatedVaultEventV1.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::CreatedVaultEventV1`; readonly $typeArgs: []; readonly $isPhantom = CreatedVaultEventV1.$isPhantom;

 readonly vaultId: ToField<ID>; readonly stakeType: ToField<String>; readonly supportedLockEnforcements: ToField<Vector<"u8">>; readonly minLockDurationMs: ToField<"u64">; readonly maxLockDurationMs: ToField<"u64">; readonly maxLockMultiplier: ToField<"u64">; readonly minStakeAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: CreatedVaultEventV1Fields, ) { this.$fullTypeName = composeSuiType( CreatedVaultEventV1.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::CreatedVaultEventV1`; this.$typeArgs = typeArgs;

 this.vaultId = fields.vaultId;; this.stakeType = fields.stakeType;; this.supportedLockEnforcements = fields.supportedLockEnforcements;; this.minLockDurationMs = fields.minLockDurationMs;; this.maxLockDurationMs = fields.maxLockDurationMs;; this.maxLockMultiplier = fields.maxLockMultiplier;; this.minStakeAmount = fields.minStakeAmount; }

 static reified( ): CreatedVaultEventV1Reified { return { typeName: CreatedVaultEventV1.$typeName, fullTypeName: composeSuiType( CreatedVaultEventV1.$typeName, ...[] ) as `${typeof PKG_V1}::events::CreatedVaultEventV1`, typeArgs: [ ] as [], isPhantom: CreatedVaultEventV1.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => CreatedVaultEventV1.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => CreatedVaultEventV1.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => CreatedVaultEventV1.fromBcs( data, ), bcs: CreatedVaultEventV1.bcs, fromJSONField: (field: any) => CreatedVaultEventV1.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => CreatedVaultEventV1.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => CreatedVaultEventV1.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => CreatedVaultEventV1.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => CreatedVaultEventV1.fetch( client, id, ), new: ( fields: CreatedVaultEventV1Fields, ) => { return new CreatedVaultEventV1( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return CreatedVaultEventV1.reified() }

 static phantom( ): PhantomReified<ToTypeStr<CreatedVaultEventV1>> { return phantom(CreatedVaultEventV1.reified( )); } static get p() { return CreatedVaultEventV1.phantom() }

 static get bcs() { return bcs.struct("CreatedVaultEventV1", {

 vaultId: ID.bcs, stakeType: String.bcs, supportedLockEnforcements: bcs.vector(bcs.u8()), minLockDurationMs: bcs.u64(), maxLockDurationMs: bcs.u64(), maxLockMultiplier: bcs.u64(), minStakeAmount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): CreatedVaultEventV1 { return CreatedVaultEventV1.reified( ).new( { vaultId: decodeFromFields(ID.reified(), fields.vaultId), stakeType: decodeFromFields(String.reified(), fields.stakeType), supportedLockEnforcements: decodeFromFields(reified.vector("u8"), fields.supportedLockEnforcements), minLockDurationMs: decodeFromFields("u64", fields.minLockDurationMs), maxLockDurationMs: decodeFromFields("u64", fields.maxLockDurationMs), maxLockMultiplier: decodeFromFields("u64", fields.maxLockMultiplier), minStakeAmount: decodeFromFields("u64", fields.minStakeAmount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): CreatedVaultEventV1 { if (!isCreatedVaultEventV1(item.type)) { throw new Error("not a CreatedVaultEventV1 type");

 }

 return CreatedVaultEventV1.reified( ).new( { vaultId: decodeFromFieldsWithTypes(ID.reified(), item.fields.vaultId), stakeType: decodeFromFieldsWithTypes(String.reified(), item.fields.stakeType), supportedLockEnforcements: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.supportedLockEnforcements), minLockDurationMs: decodeFromFieldsWithTypes("u64", item.fields.minLockDurationMs), maxLockDurationMs: decodeFromFieldsWithTypes("u64", item.fields.maxLockDurationMs), maxLockMultiplier: decodeFromFieldsWithTypes("u64", item.fields.maxLockMultiplier), minStakeAmount: decodeFromFieldsWithTypes("u64", item.fields.minStakeAmount) } ) }

 static fromBcs( data: Uint8Array ): CreatedVaultEventV1 { return CreatedVaultEventV1.fromFields( CreatedVaultEventV1.bcs.parse(data) ) }

 toJSONField() { return {

 vaultId: this.vaultId,stakeType: this.stakeType,supportedLockEnforcements: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.supportedLockEnforcements),minLockDurationMs: this.minLockDurationMs.toString(),maxLockDurationMs: this.maxLockDurationMs.toString(),maxLockMultiplier: this.maxLockMultiplier.toString(),minStakeAmount: this.minStakeAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): CreatedVaultEventV1 { return CreatedVaultEventV1.reified( ).new( { vaultId: decodeFromJSONField(ID.reified(), field.vaultId), stakeType: decodeFromJSONField(String.reified(), field.stakeType), supportedLockEnforcements: decodeFromJSONField(reified.vector("u8"), field.supportedLockEnforcements), minLockDurationMs: decodeFromJSONField("u64", field.minLockDurationMs), maxLockDurationMs: decodeFromJSONField("u64", field.maxLockDurationMs), maxLockMultiplier: decodeFromJSONField("u64", field.maxLockMultiplier), minStakeAmount: decodeFromJSONField("u64", field.minStakeAmount) } ) }

 static fromJSON( json: Record<string, any> ): CreatedVaultEventV1 { if (json.$typeName !== CreatedVaultEventV1.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return CreatedVaultEventV1.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): CreatedVaultEventV1 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCreatedVaultEventV1(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CreatedVaultEventV1 object`); } return CreatedVaultEventV1.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): CreatedVaultEventV1 { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isCreatedVaultEventV1(data.bcs.type)) { throw new Error(`object at is not a CreatedVaultEventV1 object`); }

 return CreatedVaultEventV1.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return CreatedVaultEventV1.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<CreatedVaultEventV1> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CreatedVaultEventV1 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCreatedVaultEventV1(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CreatedVaultEventV1 object`); }

 return CreatedVaultEventV1.fromSuiObjectData( res.data ); }

 }

/* ============================== InitializedRewardEventV1 =============================== */

export function isInitializedRewardEventV1(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::events::InitializedRewardEventV1`; }

export interface InitializedRewardEventV1Fields { vaultId: ToField<ID>; rewardType: ToField<String>; rewardAmount: ToField<"u64">; emissionRate: ToField<"u64">; emissionStartMs: ToField<"u64"> }

export type InitializedRewardEventV1Reified = Reified< InitializedRewardEventV1, InitializedRewardEventV1Fields >;

export class InitializedRewardEventV1 implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::InitializedRewardEventV1`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = InitializedRewardEventV1.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::InitializedRewardEventV1`; readonly $typeArgs: []; readonly $isPhantom = InitializedRewardEventV1.$isPhantom;

 readonly vaultId: ToField<ID>; readonly rewardType: ToField<String>; readonly rewardAmount: ToField<"u64">; readonly emissionRate: ToField<"u64">; readonly emissionStartMs: ToField<"u64">

 private constructor(typeArgs: [], fields: InitializedRewardEventV1Fields, ) { this.$fullTypeName = composeSuiType( InitializedRewardEventV1.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::InitializedRewardEventV1`; this.$typeArgs = typeArgs;

 this.vaultId = fields.vaultId;; this.rewardType = fields.rewardType;; this.rewardAmount = fields.rewardAmount;; this.emissionRate = fields.emissionRate;; this.emissionStartMs = fields.emissionStartMs; }

 static reified( ): InitializedRewardEventV1Reified { return { typeName: InitializedRewardEventV1.$typeName, fullTypeName: composeSuiType( InitializedRewardEventV1.$typeName, ...[] ) as `${typeof PKG_V1}::events::InitializedRewardEventV1`, typeArgs: [ ] as [], isPhantom: InitializedRewardEventV1.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => InitializedRewardEventV1.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => InitializedRewardEventV1.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => InitializedRewardEventV1.fromBcs( data, ), bcs: InitializedRewardEventV1.bcs, fromJSONField: (field: any) => InitializedRewardEventV1.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => InitializedRewardEventV1.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => InitializedRewardEventV1.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => InitializedRewardEventV1.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => InitializedRewardEventV1.fetch( client, id, ), new: ( fields: InitializedRewardEventV1Fields, ) => { return new InitializedRewardEventV1( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return InitializedRewardEventV1.reified() }

 static phantom( ): PhantomReified<ToTypeStr<InitializedRewardEventV1>> { return phantom(InitializedRewardEventV1.reified( )); } static get p() { return InitializedRewardEventV1.phantom() }

 static get bcs() { return bcs.struct("InitializedRewardEventV1", {

 vaultId: ID.bcs, rewardType: String.bcs, rewardAmount: bcs.u64(), emissionRate: bcs.u64(), emissionStartMs: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): InitializedRewardEventV1 { return InitializedRewardEventV1.reified( ).new( { vaultId: decodeFromFields(ID.reified(), fields.vaultId), rewardType: decodeFromFields(String.reified(), fields.rewardType), rewardAmount: decodeFromFields("u64", fields.rewardAmount), emissionRate: decodeFromFields("u64", fields.emissionRate), emissionStartMs: decodeFromFields("u64", fields.emissionStartMs) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): InitializedRewardEventV1 { if (!isInitializedRewardEventV1(item.type)) { throw new Error("not a InitializedRewardEventV1 type");

 }

 return InitializedRewardEventV1.reified( ).new( { vaultId: decodeFromFieldsWithTypes(ID.reified(), item.fields.vaultId), rewardType: decodeFromFieldsWithTypes(String.reified(), item.fields.rewardType), rewardAmount: decodeFromFieldsWithTypes("u64", item.fields.rewardAmount), emissionRate: decodeFromFieldsWithTypes("u64", item.fields.emissionRate), emissionStartMs: decodeFromFieldsWithTypes("u64", item.fields.emissionStartMs) } ) }

 static fromBcs( data: Uint8Array ): InitializedRewardEventV1 { return InitializedRewardEventV1.fromFields( InitializedRewardEventV1.bcs.parse(data) ) }

 toJSONField() { return {

 vaultId: this.vaultId,rewardType: this.rewardType,rewardAmount: this.rewardAmount.toString(),emissionRate: this.emissionRate.toString(),emissionStartMs: this.emissionStartMs.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): InitializedRewardEventV1 { return InitializedRewardEventV1.reified( ).new( { vaultId: decodeFromJSONField(ID.reified(), field.vaultId), rewardType: decodeFromJSONField(String.reified(), field.rewardType), rewardAmount: decodeFromJSONField("u64", field.rewardAmount), emissionRate: decodeFromJSONField("u64", field.emissionRate), emissionStartMs: decodeFromJSONField("u64", field.emissionStartMs) } ) }

 static fromJSON( json: Record<string, any> ): InitializedRewardEventV1 { if (json.$typeName !== InitializedRewardEventV1.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return InitializedRewardEventV1.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): InitializedRewardEventV1 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isInitializedRewardEventV1(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a InitializedRewardEventV1 object`); } return InitializedRewardEventV1.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): InitializedRewardEventV1 { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isInitializedRewardEventV1(data.bcs.type)) { throw new Error(`object at is not a InitializedRewardEventV1 object`); }

 return InitializedRewardEventV1.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return InitializedRewardEventV1.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<InitializedRewardEventV1> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching InitializedRewardEventV1 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isInitializedRewardEventV1(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a InitializedRewardEventV1 object`); }

 return InitializedRewardEventV1.fromSuiObjectData( res.data ); }

 }

/* ============================== AddedRewardEventV1 =============================== */

export function isAddedRewardEventV1(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::events::AddedRewardEventV1`; }

export interface AddedRewardEventV1Fields { vaultId: ToField<ID>; rewardType: ToField<String>; rewardAmount: ToField<"u64"> }

export type AddedRewardEventV1Reified = Reified< AddedRewardEventV1, AddedRewardEventV1Fields >;

export class AddedRewardEventV1 implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::AddedRewardEventV1`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = AddedRewardEventV1.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::AddedRewardEventV1`; readonly $typeArgs: []; readonly $isPhantom = AddedRewardEventV1.$isPhantom;

 readonly vaultId: ToField<ID>; readonly rewardType: ToField<String>; readonly rewardAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: AddedRewardEventV1Fields, ) { this.$fullTypeName = composeSuiType( AddedRewardEventV1.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::AddedRewardEventV1`; this.$typeArgs = typeArgs;

 this.vaultId = fields.vaultId;; this.rewardType = fields.rewardType;; this.rewardAmount = fields.rewardAmount; }

 static reified( ): AddedRewardEventV1Reified { return { typeName: AddedRewardEventV1.$typeName, fullTypeName: composeSuiType( AddedRewardEventV1.$typeName, ...[] ) as `${typeof PKG_V1}::events::AddedRewardEventV1`, typeArgs: [ ] as [], isPhantom: AddedRewardEventV1.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AddedRewardEventV1.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AddedRewardEventV1.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AddedRewardEventV1.fromBcs( data, ), bcs: AddedRewardEventV1.bcs, fromJSONField: (field: any) => AddedRewardEventV1.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AddedRewardEventV1.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AddedRewardEventV1.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => AddedRewardEventV1.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => AddedRewardEventV1.fetch( client, id, ), new: ( fields: AddedRewardEventV1Fields, ) => { return new AddedRewardEventV1( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AddedRewardEventV1.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AddedRewardEventV1>> { return phantom(AddedRewardEventV1.reified( )); } static get p() { return AddedRewardEventV1.phantom() }

 static get bcs() { return bcs.struct("AddedRewardEventV1", {

 vaultId: ID.bcs, rewardType: String.bcs, rewardAmount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): AddedRewardEventV1 { return AddedRewardEventV1.reified( ).new( { vaultId: decodeFromFields(ID.reified(), fields.vaultId), rewardType: decodeFromFields(String.reified(), fields.rewardType), rewardAmount: decodeFromFields("u64", fields.rewardAmount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AddedRewardEventV1 { if (!isAddedRewardEventV1(item.type)) { throw new Error("not a AddedRewardEventV1 type");

 }

 return AddedRewardEventV1.reified( ).new( { vaultId: decodeFromFieldsWithTypes(ID.reified(), item.fields.vaultId), rewardType: decodeFromFieldsWithTypes(String.reified(), item.fields.rewardType), rewardAmount: decodeFromFieldsWithTypes("u64", item.fields.rewardAmount) } ) }

 static fromBcs( data: Uint8Array ): AddedRewardEventV1 { return AddedRewardEventV1.fromFields( AddedRewardEventV1.bcs.parse(data) ) }

 toJSONField() { return {

 vaultId: this.vaultId,rewardType: this.rewardType,rewardAmount: this.rewardAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AddedRewardEventV1 { return AddedRewardEventV1.reified( ).new( { vaultId: decodeFromJSONField(ID.reified(), field.vaultId), rewardType: decodeFromJSONField(String.reified(), field.rewardType), rewardAmount: decodeFromJSONField("u64", field.rewardAmount) } ) }

 static fromJSON( json: Record<string, any> ): AddedRewardEventV1 { if (json.$typeName !== AddedRewardEventV1.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AddedRewardEventV1.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AddedRewardEventV1 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAddedRewardEventV1(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AddedRewardEventV1 object`); } return AddedRewardEventV1.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): AddedRewardEventV1 { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isAddedRewardEventV1(data.bcs.type)) { throw new Error(`object at is not a AddedRewardEventV1 object`); }

 return AddedRewardEventV1.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return AddedRewardEventV1.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<AddedRewardEventV1> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AddedRewardEventV1 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAddedRewardEventV1(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AddedRewardEventV1 object`); }

 return AddedRewardEventV1.fromSuiObjectData( res.data ); }

 }

/* ============================== UpdatedEmissionScheduleEventV1 =============================== */

export function isUpdatedEmissionScheduleEventV1(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::events::UpdatedEmissionScheduleEventV1`; }

export interface UpdatedEmissionScheduleEventV1Fields { vaultId: ToField<ID>; rewardType: ToField<String>; emissionFrequencyMs: ToField<"u64">; emissionRate: ToField<"u64"> }

export type UpdatedEmissionScheduleEventV1Reified = Reified< UpdatedEmissionScheduleEventV1, UpdatedEmissionScheduleEventV1Fields >;

export class UpdatedEmissionScheduleEventV1 implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::UpdatedEmissionScheduleEventV1`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UpdatedEmissionScheduleEventV1.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::UpdatedEmissionScheduleEventV1`; readonly $typeArgs: []; readonly $isPhantom = UpdatedEmissionScheduleEventV1.$isPhantom;

 readonly vaultId: ToField<ID>; readonly rewardType: ToField<String>; readonly emissionFrequencyMs: ToField<"u64">; readonly emissionRate: ToField<"u64">

 private constructor(typeArgs: [], fields: UpdatedEmissionScheduleEventV1Fields, ) { this.$fullTypeName = composeSuiType( UpdatedEmissionScheduleEventV1.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::UpdatedEmissionScheduleEventV1`; this.$typeArgs = typeArgs;

 this.vaultId = fields.vaultId;; this.rewardType = fields.rewardType;; this.emissionFrequencyMs = fields.emissionFrequencyMs;; this.emissionRate = fields.emissionRate; }

 static reified( ): UpdatedEmissionScheduleEventV1Reified { return { typeName: UpdatedEmissionScheduleEventV1.$typeName, fullTypeName: composeSuiType( UpdatedEmissionScheduleEventV1.$typeName, ...[] ) as `${typeof PKG_V1}::events::UpdatedEmissionScheduleEventV1`, typeArgs: [ ] as [], isPhantom: UpdatedEmissionScheduleEventV1.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UpdatedEmissionScheduleEventV1.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UpdatedEmissionScheduleEventV1.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UpdatedEmissionScheduleEventV1.fromBcs( data, ), bcs: UpdatedEmissionScheduleEventV1.bcs, fromJSONField: (field: any) => UpdatedEmissionScheduleEventV1.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UpdatedEmissionScheduleEventV1.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UpdatedEmissionScheduleEventV1.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UpdatedEmissionScheduleEventV1.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UpdatedEmissionScheduleEventV1.fetch( client, id, ), new: ( fields: UpdatedEmissionScheduleEventV1Fields, ) => { return new UpdatedEmissionScheduleEventV1( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UpdatedEmissionScheduleEventV1.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UpdatedEmissionScheduleEventV1>> { return phantom(UpdatedEmissionScheduleEventV1.reified( )); } static get p() { return UpdatedEmissionScheduleEventV1.phantom() }

 static get bcs() { return bcs.struct("UpdatedEmissionScheduleEventV1", {

 vaultId: ID.bcs, rewardType: String.bcs, emissionFrequencyMs: bcs.u64(), emissionRate: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UpdatedEmissionScheduleEventV1 { return UpdatedEmissionScheduleEventV1.reified( ).new( { vaultId: decodeFromFields(ID.reified(), fields.vaultId), rewardType: decodeFromFields(String.reified(), fields.rewardType), emissionFrequencyMs: decodeFromFields("u64", fields.emissionFrequencyMs), emissionRate: decodeFromFields("u64", fields.emissionRate) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UpdatedEmissionScheduleEventV1 { if (!isUpdatedEmissionScheduleEventV1(item.type)) { throw new Error("not a UpdatedEmissionScheduleEventV1 type");

 }

 return UpdatedEmissionScheduleEventV1.reified( ).new( { vaultId: decodeFromFieldsWithTypes(ID.reified(), item.fields.vaultId), rewardType: decodeFromFieldsWithTypes(String.reified(), item.fields.rewardType), emissionFrequencyMs: decodeFromFieldsWithTypes("u64", item.fields.emissionFrequencyMs), emissionRate: decodeFromFieldsWithTypes("u64", item.fields.emissionRate) } ) }

 static fromBcs( data: Uint8Array ): UpdatedEmissionScheduleEventV1 { return UpdatedEmissionScheduleEventV1.fromFields( UpdatedEmissionScheduleEventV1.bcs.parse(data) ) }

 toJSONField() { return {

 vaultId: this.vaultId,rewardType: this.rewardType,emissionFrequencyMs: this.emissionFrequencyMs.toString(),emissionRate: this.emissionRate.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UpdatedEmissionScheduleEventV1 { return UpdatedEmissionScheduleEventV1.reified( ).new( { vaultId: decodeFromJSONField(ID.reified(), field.vaultId), rewardType: decodeFromJSONField(String.reified(), field.rewardType), emissionFrequencyMs: decodeFromJSONField("u64", field.emissionFrequencyMs), emissionRate: decodeFromJSONField("u64", field.emissionRate) } ) }

 static fromJSON( json: Record<string, any> ): UpdatedEmissionScheduleEventV1 { if (json.$typeName !== UpdatedEmissionScheduleEventV1.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UpdatedEmissionScheduleEventV1.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UpdatedEmissionScheduleEventV1 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUpdatedEmissionScheduleEventV1(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UpdatedEmissionScheduleEventV1 object`); } return UpdatedEmissionScheduleEventV1.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UpdatedEmissionScheduleEventV1 { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUpdatedEmissionScheduleEventV1(data.bcs.type)) { throw new Error(`object at is not a UpdatedEmissionScheduleEventV1 object`); }

 return UpdatedEmissionScheduleEventV1.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UpdatedEmissionScheduleEventV1.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UpdatedEmissionScheduleEventV1> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UpdatedEmissionScheduleEventV1 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUpdatedEmissionScheduleEventV1(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UpdatedEmissionScheduleEventV1 object`); }

 return UpdatedEmissionScheduleEventV1.fromSuiObjectData( res.data ); }

 }

/* ============================== StakedEventV1 =============================== */

export function isStakedEventV1(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::events::StakedEventV1`; }

export interface StakedEventV1Fields { stakedPositionId: ToField<ID>; vaultId: ToField<ID>; stakedType: ToField<String>; stakedAmount: ToField<"u64">; multiplierStakedAmount: ToField<"u64">; lockEnforcement: ToField<"u8">; lockStartTimestampMs: ToField<"u64">; lockDurationMs: ToField<"u64">; lockMultiplier: ToField<"u64"> }

export type StakedEventV1Reified = Reified< StakedEventV1, StakedEventV1Fields >;

export class StakedEventV1 implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::StakedEventV1`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = StakedEventV1.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::StakedEventV1`; readonly $typeArgs: []; readonly $isPhantom = StakedEventV1.$isPhantom;

 readonly stakedPositionId: ToField<ID>; readonly vaultId: ToField<ID>; readonly stakedType: ToField<String>; readonly stakedAmount: ToField<"u64">; readonly multiplierStakedAmount: ToField<"u64">; readonly lockEnforcement: ToField<"u8">; readonly lockStartTimestampMs: ToField<"u64">; readonly lockDurationMs: ToField<"u64">; readonly lockMultiplier: ToField<"u64">

 private constructor(typeArgs: [], fields: StakedEventV1Fields, ) { this.$fullTypeName = composeSuiType( StakedEventV1.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::StakedEventV1`; this.$typeArgs = typeArgs;

 this.stakedPositionId = fields.stakedPositionId;; this.vaultId = fields.vaultId;; this.stakedType = fields.stakedType;; this.stakedAmount = fields.stakedAmount;; this.multiplierStakedAmount = fields.multiplierStakedAmount;; this.lockEnforcement = fields.lockEnforcement;; this.lockStartTimestampMs = fields.lockStartTimestampMs;; this.lockDurationMs = fields.lockDurationMs;; this.lockMultiplier = fields.lockMultiplier; }

 static reified( ): StakedEventV1Reified { return { typeName: StakedEventV1.$typeName, fullTypeName: composeSuiType( StakedEventV1.$typeName, ...[] ) as `${typeof PKG_V1}::events::StakedEventV1`, typeArgs: [ ] as [], isPhantom: StakedEventV1.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StakedEventV1.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StakedEventV1.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StakedEventV1.fromBcs( data, ), bcs: StakedEventV1.bcs, fromJSONField: (field: any) => StakedEventV1.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StakedEventV1.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StakedEventV1.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => StakedEventV1.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => StakedEventV1.fetch( client, id, ), new: ( fields: StakedEventV1Fields, ) => { return new StakedEventV1( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StakedEventV1.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StakedEventV1>> { return phantom(StakedEventV1.reified( )); } static get p() { return StakedEventV1.phantom() }

 static get bcs() { return bcs.struct("StakedEventV1", {

 stakedPositionId: ID.bcs, vaultId: ID.bcs, stakedType: String.bcs, stakedAmount: bcs.u64(), multiplierStakedAmount: bcs.u64(), lockEnforcement: bcs.u8(), lockStartTimestampMs: bcs.u64(), lockDurationMs: bcs.u64(), lockMultiplier: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): StakedEventV1 { return StakedEventV1.reified( ).new( { stakedPositionId: decodeFromFields(ID.reified(), fields.stakedPositionId), vaultId: decodeFromFields(ID.reified(), fields.vaultId), stakedType: decodeFromFields(String.reified(), fields.stakedType), stakedAmount: decodeFromFields("u64", fields.stakedAmount), multiplierStakedAmount: decodeFromFields("u64", fields.multiplierStakedAmount), lockEnforcement: decodeFromFields("u8", fields.lockEnforcement), lockStartTimestampMs: decodeFromFields("u64", fields.lockStartTimestampMs), lockDurationMs: decodeFromFields("u64", fields.lockDurationMs), lockMultiplier: decodeFromFields("u64", fields.lockMultiplier) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StakedEventV1 { if (!isStakedEventV1(item.type)) { throw new Error("not a StakedEventV1 type");

 }

 return StakedEventV1.reified( ).new( { stakedPositionId: decodeFromFieldsWithTypes(ID.reified(), item.fields.stakedPositionId), vaultId: decodeFromFieldsWithTypes(ID.reified(), item.fields.vaultId), stakedType: decodeFromFieldsWithTypes(String.reified(), item.fields.stakedType), stakedAmount: decodeFromFieldsWithTypes("u64", item.fields.stakedAmount), multiplierStakedAmount: decodeFromFieldsWithTypes("u64", item.fields.multiplierStakedAmount), lockEnforcement: decodeFromFieldsWithTypes("u8", item.fields.lockEnforcement), lockStartTimestampMs: decodeFromFieldsWithTypes("u64", item.fields.lockStartTimestampMs), lockDurationMs: decodeFromFieldsWithTypes("u64", item.fields.lockDurationMs), lockMultiplier: decodeFromFieldsWithTypes("u64", item.fields.lockMultiplier) } ) }

 static fromBcs( data: Uint8Array ): StakedEventV1 { return StakedEventV1.fromFields( StakedEventV1.bcs.parse(data) ) }

 toJSONField() { return {

 stakedPositionId: this.stakedPositionId,vaultId: this.vaultId,stakedType: this.stakedType,stakedAmount: this.stakedAmount.toString(),multiplierStakedAmount: this.multiplierStakedAmount.toString(),lockEnforcement: this.lockEnforcement,lockStartTimestampMs: this.lockStartTimestampMs.toString(),lockDurationMs: this.lockDurationMs.toString(),lockMultiplier: this.lockMultiplier.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StakedEventV1 { return StakedEventV1.reified( ).new( { stakedPositionId: decodeFromJSONField(ID.reified(), field.stakedPositionId), vaultId: decodeFromJSONField(ID.reified(), field.vaultId), stakedType: decodeFromJSONField(String.reified(), field.stakedType), stakedAmount: decodeFromJSONField("u64", field.stakedAmount), multiplierStakedAmount: decodeFromJSONField("u64", field.multiplierStakedAmount), lockEnforcement: decodeFromJSONField("u8", field.lockEnforcement), lockStartTimestampMs: decodeFromJSONField("u64", field.lockStartTimestampMs), lockDurationMs: decodeFromJSONField("u64", field.lockDurationMs), lockMultiplier: decodeFromJSONField("u64", field.lockMultiplier) } ) }

 static fromJSON( json: Record<string, any> ): StakedEventV1 { if (json.$typeName !== StakedEventV1.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StakedEventV1.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StakedEventV1 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStakedEventV1(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StakedEventV1 object`); } return StakedEventV1.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): StakedEventV1 { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isStakedEventV1(data.bcs.type)) { throw new Error(`object at is not a StakedEventV1 object`); }

 return StakedEventV1.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return StakedEventV1.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<StakedEventV1> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StakedEventV1 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStakedEventV1(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StakedEventV1 object`); }

 return StakedEventV1.fromSuiObjectData( res.data ); }

 }

/* ============================== LockedEventV1 =============================== */

export function isLockedEventV1(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::events::LockedEventV1`; }

export interface LockedEventV1Fields { stakedPositionId: ToField<ID>; vaultId: ToField<ID>; stakedType: ToField<String>; stakedAmount: ToField<"u64">; lockStartTimestampMs: ToField<"u64">; lockDurationMs: ToField<"u64">; lockMultiplier: ToField<"u64"> }

export type LockedEventV1Reified = Reified< LockedEventV1, LockedEventV1Fields >;

export class LockedEventV1 implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::LockedEventV1`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = LockedEventV1.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::LockedEventV1`; readonly $typeArgs: []; readonly $isPhantom = LockedEventV1.$isPhantom;

 readonly stakedPositionId: ToField<ID>; readonly vaultId: ToField<ID>; readonly stakedType: ToField<String>; readonly stakedAmount: ToField<"u64">; readonly lockStartTimestampMs: ToField<"u64">; readonly lockDurationMs: ToField<"u64">; readonly lockMultiplier: ToField<"u64">

 private constructor(typeArgs: [], fields: LockedEventV1Fields, ) { this.$fullTypeName = composeSuiType( LockedEventV1.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::LockedEventV1`; this.$typeArgs = typeArgs;

 this.stakedPositionId = fields.stakedPositionId;; this.vaultId = fields.vaultId;; this.stakedType = fields.stakedType;; this.stakedAmount = fields.stakedAmount;; this.lockStartTimestampMs = fields.lockStartTimestampMs;; this.lockDurationMs = fields.lockDurationMs;; this.lockMultiplier = fields.lockMultiplier; }

 static reified( ): LockedEventV1Reified { return { typeName: LockedEventV1.$typeName, fullTypeName: composeSuiType( LockedEventV1.$typeName, ...[] ) as `${typeof PKG_V1}::events::LockedEventV1`, typeArgs: [ ] as [], isPhantom: LockedEventV1.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => LockedEventV1.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => LockedEventV1.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => LockedEventV1.fromBcs( data, ), bcs: LockedEventV1.bcs, fromJSONField: (field: any) => LockedEventV1.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => LockedEventV1.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => LockedEventV1.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => LockedEventV1.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => LockedEventV1.fetch( client, id, ), new: ( fields: LockedEventV1Fields, ) => { return new LockedEventV1( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return LockedEventV1.reified() }

 static phantom( ): PhantomReified<ToTypeStr<LockedEventV1>> { return phantom(LockedEventV1.reified( )); } static get p() { return LockedEventV1.phantom() }

 static get bcs() { return bcs.struct("LockedEventV1", {

 stakedPositionId: ID.bcs, vaultId: ID.bcs, stakedType: String.bcs, stakedAmount: bcs.u64(), lockStartTimestampMs: bcs.u64(), lockDurationMs: bcs.u64(), lockMultiplier: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): LockedEventV1 { return LockedEventV1.reified( ).new( { stakedPositionId: decodeFromFields(ID.reified(), fields.stakedPositionId), vaultId: decodeFromFields(ID.reified(), fields.vaultId), stakedType: decodeFromFields(String.reified(), fields.stakedType), stakedAmount: decodeFromFields("u64", fields.stakedAmount), lockStartTimestampMs: decodeFromFields("u64", fields.lockStartTimestampMs), lockDurationMs: decodeFromFields("u64", fields.lockDurationMs), lockMultiplier: decodeFromFields("u64", fields.lockMultiplier) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): LockedEventV1 { if (!isLockedEventV1(item.type)) { throw new Error("not a LockedEventV1 type");

 }

 return LockedEventV1.reified( ).new( { stakedPositionId: decodeFromFieldsWithTypes(ID.reified(), item.fields.stakedPositionId), vaultId: decodeFromFieldsWithTypes(ID.reified(), item.fields.vaultId), stakedType: decodeFromFieldsWithTypes(String.reified(), item.fields.stakedType), stakedAmount: decodeFromFieldsWithTypes("u64", item.fields.stakedAmount), lockStartTimestampMs: decodeFromFieldsWithTypes("u64", item.fields.lockStartTimestampMs), lockDurationMs: decodeFromFieldsWithTypes("u64", item.fields.lockDurationMs), lockMultiplier: decodeFromFieldsWithTypes("u64", item.fields.lockMultiplier) } ) }

 static fromBcs( data: Uint8Array ): LockedEventV1 { return LockedEventV1.fromFields( LockedEventV1.bcs.parse(data) ) }

 toJSONField() { return {

 stakedPositionId: this.stakedPositionId,vaultId: this.vaultId,stakedType: this.stakedType,stakedAmount: this.stakedAmount.toString(),lockStartTimestampMs: this.lockStartTimestampMs.toString(),lockDurationMs: this.lockDurationMs.toString(),lockMultiplier: this.lockMultiplier.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): LockedEventV1 { return LockedEventV1.reified( ).new( { stakedPositionId: decodeFromJSONField(ID.reified(), field.stakedPositionId), vaultId: decodeFromJSONField(ID.reified(), field.vaultId), stakedType: decodeFromJSONField(String.reified(), field.stakedType), stakedAmount: decodeFromJSONField("u64", field.stakedAmount), lockStartTimestampMs: decodeFromJSONField("u64", field.lockStartTimestampMs), lockDurationMs: decodeFromJSONField("u64", field.lockDurationMs), lockMultiplier: decodeFromJSONField("u64", field.lockMultiplier) } ) }

 static fromJSON( json: Record<string, any> ): LockedEventV1 { if (json.$typeName !== LockedEventV1.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return LockedEventV1.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): LockedEventV1 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLockedEventV1(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LockedEventV1 object`); } return LockedEventV1.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): LockedEventV1 { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isLockedEventV1(data.bcs.type)) { throw new Error(`object at is not a LockedEventV1 object`); }

 return LockedEventV1.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return LockedEventV1.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<LockedEventV1> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LockedEventV1 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLockedEventV1(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LockedEventV1 object`); }

 return LockedEventV1.fromSuiObjectData( res.data ); }

 }

/* ============================== UnlockedEventV1 =============================== */

export function isUnlockedEventV1(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::events::UnlockedEventV1`; }

export interface UnlockedEventV1Fields { stakedPositionId: ToField<ID>; vaultId: ToField<ID>; stakedType: ToField<String>; stakedAmount: ToField<"u64"> }

export type UnlockedEventV1Reified = Reified< UnlockedEventV1, UnlockedEventV1Fields >;

export class UnlockedEventV1 implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::UnlockedEventV1`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UnlockedEventV1.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::UnlockedEventV1`; readonly $typeArgs: []; readonly $isPhantom = UnlockedEventV1.$isPhantom;

 readonly stakedPositionId: ToField<ID>; readonly vaultId: ToField<ID>; readonly stakedType: ToField<String>; readonly stakedAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: UnlockedEventV1Fields, ) { this.$fullTypeName = composeSuiType( UnlockedEventV1.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::UnlockedEventV1`; this.$typeArgs = typeArgs;

 this.stakedPositionId = fields.stakedPositionId;; this.vaultId = fields.vaultId;; this.stakedType = fields.stakedType;; this.stakedAmount = fields.stakedAmount; }

 static reified( ): UnlockedEventV1Reified { return { typeName: UnlockedEventV1.$typeName, fullTypeName: composeSuiType( UnlockedEventV1.$typeName, ...[] ) as `${typeof PKG_V1}::events::UnlockedEventV1`, typeArgs: [ ] as [], isPhantom: UnlockedEventV1.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UnlockedEventV1.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UnlockedEventV1.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UnlockedEventV1.fromBcs( data, ), bcs: UnlockedEventV1.bcs, fromJSONField: (field: any) => UnlockedEventV1.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UnlockedEventV1.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UnlockedEventV1.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UnlockedEventV1.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UnlockedEventV1.fetch( client, id, ), new: ( fields: UnlockedEventV1Fields, ) => { return new UnlockedEventV1( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UnlockedEventV1.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UnlockedEventV1>> { return phantom(UnlockedEventV1.reified( )); } static get p() { return UnlockedEventV1.phantom() }

 static get bcs() { return bcs.struct("UnlockedEventV1", {

 stakedPositionId: ID.bcs, vaultId: ID.bcs, stakedType: String.bcs, stakedAmount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UnlockedEventV1 { return UnlockedEventV1.reified( ).new( { stakedPositionId: decodeFromFields(ID.reified(), fields.stakedPositionId), vaultId: decodeFromFields(ID.reified(), fields.vaultId), stakedType: decodeFromFields(String.reified(), fields.stakedType), stakedAmount: decodeFromFields("u64", fields.stakedAmount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UnlockedEventV1 { if (!isUnlockedEventV1(item.type)) { throw new Error("not a UnlockedEventV1 type");

 }

 return UnlockedEventV1.reified( ).new( { stakedPositionId: decodeFromFieldsWithTypes(ID.reified(), item.fields.stakedPositionId), vaultId: decodeFromFieldsWithTypes(ID.reified(), item.fields.vaultId), stakedType: decodeFromFieldsWithTypes(String.reified(), item.fields.stakedType), stakedAmount: decodeFromFieldsWithTypes("u64", item.fields.stakedAmount) } ) }

 static fromBcs( data: Uint8Array ): UnlockedEventV1 { return UnlockedEventV1.fromFields( UnlockedEventV1.bcs.parse(data) ) }

 toJSONField() { return {

 stakedPositionId: this.stakedPositionId,vaultId: this.vaultId,stakedType: this.stakedType,stakedAmount: this.stakedAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UnlockedEventV1 { return UnlockedEventV1.reified( ).new( { stakedPositionId: decodeFromJSONField(ID.reified(), field.stakedPositionId), vaultId: decodeFromJSONField(ID.reified(), field.vaultId), stakedType: decodeFromJSONField(String.reified(), field.stakedType), stakedAmount: decodeFromJSONField("u64", field.stakedAmount) } ) }

 static fromJSON( json: Record<string, any> ): UnlockedEventV1 { if (json.$typeName !== UnlockedEventV1.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UnlockedEventV1.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UnlockedEventV1 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUnlockedEventV1(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UnlockedEventV1 object`); } return UnlockedEventV1.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UnlockedEventV1 { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUnlockedEventV1(data.bcs.type)) { throw new Error(`object at is not a UnlockedEventV1 object`); }

 return UnlockedEventV1.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UnlockedEventV1.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UnlockedEventV1> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UnlockedEventV1 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUnlockedEventV1(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UnlockedEventV1 object`); }

 return UnlockedEventV1.fromSuiObjectData( res.data ); }

 }

/* ============================== JoinedEventV1 =============================== */

export function isJoinedEventV1(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::events::JoinedEventV1`; }

export interface JoinedEventV1Fields { stakedPositionId: ToField<ID>; otherStakedPositionId: ToField<ID> }

export type JoinedEventV1Reified = Reified< JoinedEventV1, JoinedEventV1Fields >;

export class JoinedEventV1 implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::JoinedEventV1`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = JoinedEventV1.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::JoinedEventV1`; readonly $typeArgs: []; readonly $isPhantom = JoinedEventV1.$isPhantom;

 readonly stakedPositionId: ToField<ID>; readonly otherStakedPositionId: ToField<ID>

 private constructor(typeArgs: [], fields: JoinedEventV1Fields, ) { this.$fullTypeName = composeSuiType( JoinedEventV1.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::JoinedEventV1`; this.$typeArgs = typeArgs;

 this.stakedPositionId = fields.stakedPositionId;; this.otherStakedPositionId = fields.otherStakedPositionId; }

 static reified( ): JoinedEventV1Reified { return { typeName: JoinedEventV1.$typeName, fullTypeName: composeSuiType( JoinedEventV1.$typeName, ...[] ) as `${typeof PKG_V1}::events::JoinedEventV1`, typeArgs: [ ] as [], isPhantom: JoinedEventV1.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => JoinedEventV1.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => JoinedEventV1.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => JoinedEventV1.fromBcs( data, ), bcs: JoinedEventV1.bcs, fromJSONField: (field: any) => JoinedEventV1.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => JoinedEventV1.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => JoinedEventV1.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => JoinedEventV1.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => JoinedEventV1.fetch( client, id, ), new: ( fields: JoinedEventV1Fields, ) => { return new JoinedEventV1( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return JoinedEventV1.reified() }

 static phantom( ): PhantomReified<ToTypeStr<JoinedEventV1>> { return phantom(JoinedEventV1.reified( )); } static get p() { return JoinedEventV1.phantom() }

 static get bcs() { return bcs.struct("JoinedEventV1", {

 stakedPositionId: ID.bcs, otherStakedPositionId: ID.bcs

}) };

 static fromFields( fields: Record<string, any> ): JoinedEventV1 { return JoinedEventV1.reified( ).new( { stakedPositionId: decodeFromFields(ID.reified(), fields.stakedPositionId), otherStakedPositionId: decodeFromFields(ID.reified(), fields.otherStakedPositionId) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): JoinedEventV1 { if (!isJoinedEventV1(item.type)) { throw new Error("not a JoinedEventV1 type");

 }

 return JoinedEventV1.reified( ).new( { stakedPositionId: decodeFromFieldsWithTypes(ID.reified(), item.fields.stakedPositionId), otherStakedPositionId: decodeFromFieldsWithTypes(ID.reified(), item.fields.otherStakedPositionId) } ) }

 static fromBcs( data: Uint8Array ): JoinedEventV1 { return JoinedEventV1.fromFields( JoinedEventV1.bcs.parse(data) ) }

 toJSONField() { return {

 stakedPositionId: this.stakedPositionId,otherStakedPositionId: this.otherStakedPositionId,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): JoinedEventV1 { return JoinedEventV1.reified( ).new( { stakedPositionId: decodeFromJSONField(ID.reified(), field.stakedPositionId), otherStakedPositionId: decodeFromJSONField(ID.reified(), field.otherStakedPositionId) } ) }

 static fromJSON( json: Record<string, any> ): JoinedEventV1 { if (json.$typeName !== JoinedEventV1.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return JoinedEventV1.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): JoinedEventV1 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isJoinedEventV1(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a JoinedEventV1 object`); } return JoinedEventV1.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): JoinedEventV1 { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isJoinedEventV1(data.bcs.type)) { throw new Error(`object at is not a JoinedEventV1 object`); }

 return JoinedEventV1.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return JoinedEventV1.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<JoinedEventV1> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching JoinedEventV1 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isJoinedEventV1(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a JoinedEventV1 object`); }

 return JoinedEventV1.fromSuiObjectData( res.data ); }

 }

/* ============================== SplitEventV1 =============================== */

export function isSplitEventV1(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::events::SplitEventV1`; }

export interface SplitEventV1Fields { stakedPositionId: ToField<ID>; splitStakedPositionId: ToField<ID> }

export type SplitEventV1Reified = Reified< SplitEventV1, SplitEventV1Fields >;

export class SplitEventV1 implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::SplitEventV1`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SplitEventV1.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::SplitEventV1`; readonly $typeArgs: []; readonly $isPhantom = SplitEventV1.$isPhantom;

 readonly stakedPositionId: ToField<ID>; readonly splitStakedPositionId: ToField<ID>

 private constructor(typeArgs: [], fields: SplitEventV1Fields, ) { this.$fullTypeName = composeSuiType( SplitEventV1.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::SplitEventV1`; this.$typeArgs = typeArgs;

 this.stakedPositionId = fields.stakedPositionId;; this.splitStakedPositionId = fields.splitStakedPositionId; }

 static reified( ): SplitEventV1Reified { return { typeName: SplitEventV1.$typeName, fullTypeName: composeSuiType( SplitEventV1.$typeName, ...[] ) as `${typeof PKG_V1}::events::SplitEventV1`, typeArgs: [ ] as [], isPhantom: SplitEventV1.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SplitEventV1.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SplitEventV1.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SplitEventV1.fromBcs( data, ), bcs: SplitEventV1.bcs, fromJSONField: (field: any) => SplitEventV1.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SplitEventV1.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SplitEventV1.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => SplitEventV1.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => SplitEventV1.fetch( client, id, ), new: ( fields: SplitEventV1Fields, ) => { return new SplitEventV1( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SplitEventV1.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SplitEventV1>> { return phantom(SplitEventV1.reified( )); } static get p() { return SplitEventV1.phantom() }

 static get bcs() { return bcs.struct("SplitEventV1", {

 stakedPositionId: ID.bcs, splitStakedPositionId: ID.bcs

}) };

 static fromFields( fields: Record<string, any> ): SplitEventV1 { return SplitEventV1.reified( ).new( { stakedPositionId: decodeFromFields(ID.reified(), fields.stakedPositionId), splitStakedPositionId: decodeFromFields(ID.reified(), fields.splitStakedPositionId) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SplitEventV1 { if (!isSplitEventV1(item.type)) { throw new Error("not a SplitEventV1 type");

 }

 return SplitEventV1.reified( ).new( { stakedPositionId: decodeFromFieldsWithTypes(ID.reified(), item.fields.stakedPositionId), splitStakedPositionId: decodeFromFieldsWithTypes(ID.reified(), item.fields.splitStakedPositionId) } ) }

 static fromBcs( data: Uint8Array ): SplitEventV1 { return SplitEventV1.fromFields( SplitEventV1.bcs.parse(data) ) }

 toJSONField() { return {

 stakedPositionId: this.stakedPositionId,splitStakedPositionId: this.splitStakedPositionId,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SplitEventV1 { return SplitEventV1.reified( ).new( { stakedPositionId: decodeFromJSONField(ID.reified(), field.stakedPositionId), splitStakedPositionId: decodeFromJSONField(ID.reified(), field.splitStakedPositionId) } ) }

 static fromJSON( json: Record<string, any> ): SplitEventV1 { if (json.$typeName !== SplitEventV1.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SplitEventV1.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SplitEventV1 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSplitEventV1(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SplitEventV1 object`); } return SplitEventV1.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): SplitEventV1 { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSplitEventV1(data.bcs.type)) { throw new Error(`object at is not a SplitEventV1 object`); }

 return SplitEventV1.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SplitEventV1.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<SplitEventV1> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SplitEventV1 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSplitEventV1(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SplitEventV1 object`); }

 return SplitEventV1.fromSuiObjectData( res.data ); }

 }

/* ============================== DepositedPrincipalEventV1 =============================== */

export function isDepositedPrincipalEventV1(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::events::DepositedPrincipalEventV1`; }

export interface DepositedPrincipalEventV1Fields { stakedPositionId: ToField<ID>; vaultId: ToField<ID>; stakeType: ToField<String>; amount: ToField<"u64"> }

export type DepositedPrincipalEventV1Reified = Reified< DepositedPrincipalEventV1, DepositedPrincipalEventV1Fields >;

export class DepositedPrincipalEventV1 implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::DepositedPrincipalEventV1`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DepositedPrincipalEventV1.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::DepositedPrincipalEventV1`; readonly $typeArgs: []; readonly $isPhantom = DepositedPrincipalEventV1.$isPhantom;

 readonly stakedPositionId: ToField<ID>; readonly vaultId: ToField<ID>; readonly stakeType: ToField<String>; readonly amount: ToField<"u64">

 private constructor(typeArgs: [], fields: DepositedPrincipalEventV1Fields, ) { this.$fullTypeName = composeSuiType( DepositedPrincipalEventV1.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::DepositedPrincipalEventV1`; this.$typeArgs = typeArgs;

 this.stakedPositionId = fields.stakedPositionId;; this.vaultId = fields.vaultId;; this.stakeType = fields.stakeType;; this.amount = fields.amount; }

 static reified( ): DepositedPrincipalEventV1Reified { return { typeName: DepositedPrincipalEventV1.$typeName, fullTypeName: composeSuiType( DepositedPrincipalEventV1.$typeName, ...[] ) as `${typeof PKG_V1}::events::DepositedPrincipalEventV1`, typeArgs: [ ] as [], isPhantom: DepositedPrincipalEventV1.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DepositedPrincipalEventV1.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DepositedPrincipalEventV1.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DepositedPrincipalEventV1.fromBcs( data, ), bcs: DepositedPrincipalEventV1.bcs, fromJSONField: (field: any) => DepositedPrincipalEventV1.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DepositedPrincipalEventV1.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DepositedPrincipalEventV1.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DepositedPrincipalEventV1.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DepositedPrincipalEventV1.fetch( client, id, ), new: ( fields: DepositedPrincipalEventV1Fields, ) => { return new DepositedPrincipalEventV1( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DepositedPrincipalEventV1.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DepositedPrincipalEventV1>> { return phantom(DepositedPrincipalEventV1.reified( )); } static get p() { return DepositedPrincipalEventV1.phantom() }

 static get bcs() { return bcs.struct("DepositedPrincipalEventV1", {

 stakedPositionId: ID.bcs, vaultId: ID.bcs, stakeType: String.bcs, amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DepositedPrincipalEventV1 { return DepositedPrincipalEventV1.reified( ).new( { stakedPositionId: decodeFromFields(ID.reified(), fields.stakedPositionId), vaultId: decodeFromFields(ID.reified(), fields.vaultId), stakeType: decodeFromFields(String.reified(), fields.stakeType), amount: decodeFromFields("u64", fields.amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DepositedPrincipalEventV1 { if (!isDepositedPrincipalEventV1(item.type)) { throw new Error("not a DepositedPrincipalEventV1 type");

 }

 return DepositedPrincipalEventV1.reified( ).new( { stakedPositionId: decodeFromFieldsWithTypes(ID.reified(), item.fields.stakedPositionId), vaultId: decodeFromFieldsWithTypes(ID.reified(), item.fields.vaultId), stakeType: decodeFromFieldsWithTypes(String.reified(), item.fields.stakeType), amount: decodeFromFieldsWithTypes("u64", item.fields.amount) } ) }

 static fromBcs( data: Uint8Array ): DepositedPrincipalEventV1 { return DepositedPrincipalEventV1.fromFields( DepositedPrincipalEventV1.bcs.parse(data) ) }

 toJSONField() { return {

 stakedPositionId: this.stakedPositionId,vaultId: this.vaultId,stakeType: this.stakeType,amount: this.amount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DepositedPrincipalEventV1 { return DepositedPrincipalEventV1.reified( ).new( { stakedPositionId: decodeFromJSONField(ID.reified(), field.stakedPositionId), vaultId: decodeFromJSONField(ID.reified(), field.vaultId), stakeType: decodeFromJSONField(String.reified(), field.stakeType), amount: decodeFromJSONField("u64", field.amount) } ) }

 static fromJSON( json: Record<string, any> ): DepositedPrincipalEventV1 { if (json.$typeName !== DepositedPrincipalEventV1.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DepositedPrincipalEventV1.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DepositedPrincipalEventV1 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDepositedPrincipalEventV1(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DepositedPrincipalEventV1 object`); } return DepositedPrincipalEventV1.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DepositedPrincipalEventV1 { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDepositedPrincipalEventV1(data.bcs.type)) { throw new Error(`object at is not a DepositedPrincipalEventV1 object`); }

 return DepositedPrincipalEventV1.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DepositedPrincipalEventV1.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DepositedPrincipalEventV1> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DepositedPrincipalEventV1 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDepositedPrincipalEventV1(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DepositedPrincipalEventV1 object`); }

 return DepositedPrincipalEventV1.fromSuiObjectData( res.data ); }

 }

/* ============================== WithdrewPrincipalEventV1 =============================== */

export function isWithdrewPrincipalEventV1(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::events::WithdrewPrincipalEventV1`; }

export interface WithdrewPrincipalEventV1Fields { stakedPositionId: ToField<ID>; vaultId: ToField<ID>; stakeType: ToField<String>; amount: ToField<"u64"> }

export type WithdrewPrincipalEventV1Reified = Reified< WithdrewPrincipalEventV1, WithdrewPrincipalEventV1Fields >;

export class WithdrewPrincipalEventV1 implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::WithdrewPrincipalEventV1`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = WithdrewPrincipalEventV1.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::WithdrewPrincipalEventV1`; readonly $typeArgs: []; readonly $isPhantom = WithdrewPrincipalEventV1.$isPhantom;

 readonly stakedPositionId: ToField<ID>; readonly vaultId: ToField<ID>; readonly stakeType: ToField<String>; readonly amount: ToField<"u64">

 private constructor(typeArgs: [], fields: WithdrewPrincipalEventV1Fields, ) { this.$fullTypeName = composeSuiType( WithdrewPrincipalEventV1.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::WithdrewPrincipalEventV1`; this.$typeArgs = typeArgs;

 this.stakedPositionId = fields.stakedPositionId;; this.vaultId = fields.vaultId;; this.stakeType = fields.stakeType;; this.amount = fields.amount; }

 static reified( ): WithdrewPrincipalEventV1Reified { return { typeName: WithdrewPrincipalEventV1.$typeName, fullTypeName: composeSuiType( WithdrewPrincipalEventV1.$typeName, ...[] ) as `${typeof PKG_V1}::events::WithdrewPrincipalEventV1`, typeArgs: [ ] as [], isPhantom: WithdrewPrincipalEventV1.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => WithdrewPrincipalEventV1.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrewPrincipalEventV1.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => WithdrewPrincipalEventV1.fromBcs( data, ), bcs: WithdrewPrincipalEventV1.bcs, fromJSONField: (field: any) => WithdrewPrincipalEventV1.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => WithdrewPrincipalEventV1.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => WithdrewPrincipalEventV1.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => WithdrewPrincipalEventV1.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => WithdrewPrincipalEventV1.fetch( client, id, ), new: ( fields: WithdrewPrincipalEventV1Fields, ) => { return new WithdrewPrincipalEventV1( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return WithdrewPrincipalEventV1.reified() }

 static phantom( ): PhantomReified<ToTypeStr<WithdrewPrincipalEventV1>> { return phantom(WithdrewPrincipalEventV1.reified( )); } static get p() { return WithdrewPrincipalEventV1.phantom() }

 static get bcs() { return bcs.struct("WithdrewPrincipalEventV1", {

 stakedPositionId: ID.bcs, vaultId: ID.bcs, stakeType: String.bcs, amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): WithdrewPrincipalEventV1 { return WithdrewPrincipalEventV1.reified( ).new( { stakedPositionId: decodeFromFields(ID.reified(), fields.stakedPositionId), vaultId: decodeFromFields(ID.reified(), fields.vaultId), stakeType: decodeFromFields(String.reified(), fields.stakeType), amount: decodeFromFields("u64", fields.amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): WithdrewPrincipalEventV1 { if (!isWithdrewPrincipalEventV1(item.type)) { throw new Error("not a WithdrewPrincipalEventV1 type");

 }

 return WithdrewPrincipalEventV1.reified( ).new( { stakedPositionId: decodeFromFieldsWithTypes(ID.reified(), item.fields.stakedPositionId), vaultId: decodeFromFieldsWithTypes(ID.reified(), item.fields.vaultId), stakeType: decodeFromFieldsWithTypes(String.reified(), item.fields.stakeType), amount: decodeFromFieldsWithTypes("u64", item.fields.amount) } ) }

 static fromBcs( data: Uint8Array ): WithdrewPrincipalEventV1 { return WithdrewPrincipalEventV1.fromFields( WithdrewPrincipalEventV1.bcs.parse(data) ) }

 toJSONField() { return {

 stakedPositionId: this.stakedPositionId,vaultId: this.vaultId,stakeType: this.stakeType,amount: this.amount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): WithdrewPrincipalEventV1 { return WithdrewPrincipalEventV1.reified( ).new( { stakedPositionId: decodeFromJSONField(ID.reified(), field.stakedPositionId), vaultId: decodeFromJSONField(ID.reified(), field.vaultId), stakeType: decodeFromJSONField(String.reified(), field.stakeType), amount: decodeFromJSONField("u64", field.amount) } ) }

 static fromJSON( json: Record<string, any> ): WithdrewPrincipalEventV1 { if (json.$typeName !== WithdrewPrincipalEventV1.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return WithdrewPrincipalEventV1.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): WithdrewPrincipalEventV1 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isWithdrewPrincipalEventV1(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a WithdrewPrincipalEventV1 object`); } return WithdrewPrincipalEventV1.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): WithdrewPrincipalEventV1 { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isWithdrewPrincipalEventV1(data.bcs.type)) { throw new Error(`object at is not a WithdrewPrincipalEventV1 object`); }

 return WithdrewPrincipalEventV1.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return WithdrewPrincipalEventV1.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<WithdrewPrincipalEventV1> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching WithdrewPrincipalEventV1 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrewPrincipalEventV1(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a WithdrewPrincipalEventV1 object`); }

 return WithdrewPrincipalEventV1.fromSuiObjectData( res.data ); }

 }

/* ============================== HarvestedRewardsEventV1 =============================== */

export function isHarvestedRewardsEventV1(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::events::HarvestedRewardsEventV1`; }

export interface HarvestedRewardsEventV1Fields { vaultId: ToField<ID>; rewardTypes: ToField<Vector<String>>; rewardAmounts: ToField<Vector<"u64">> }

export type HarvestedRewardsEventV1Reified = Reified< HarvestedRewardsEventV1, HarvestedRewardsEventV1Fields >;

export class HarvestedRewardsEventV1 implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::HarvestedRewardsEventV1`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = HarvestedRewardsEventV1.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::HarvestedRewardsEventV1`; readonly $typeArgs: []; readonly $isPhantom = HarvestedRewardsEventV1.$isPhantom;

 readonly vaultId: ToField<ID>; readonly rewardTypes: ToField<Vector<String>>; readonly rewardAmounts: ToField<Vector<"u64">>

 private constructor(typeArgs: [], fields: HarvestedRewardsEventV1Fields, ) { this.$fullTypeName = composeSuiType( HarvestedRewardsEventV1.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::HarvestedRewardsEventV1`; this.$typeArgs = typeArgs;

 this.vaultId = fields.vaultId;; this.rewardTypes = fields.rewardTypes;; this.rewardAmounts = fields.rewardAmounts; }

 static reified( ): HarvestedRewardsEventV1Reified { return { typeName: HarvestedRewardsEventV1.$typeName, fullTypeName: composeSuiType( HarvestedRewardsEventV1.$typeName, ...[] ) as `${typeof PKG_V1}::events::HarvestedRewardsEventV1`, typeArgs: [ ] as [], isPhantom: HarvestedRewardsEventV1.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => HarvestedRewardsEventV1.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => HarvestedRewardsEventV1.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => HarvestedRewardsEventV1.fromBcs( data, ), bcs: HarvestedRewardsEventV1.bcs, fromJSONField: (field: any) => HarvestedRewardsEventV1.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => HarvestedRewardsEventV1.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => HarvestedRewardsEventV1.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => HarvestedRewardsEventV1.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => HarvestedRewardsEventV1.fetch( client, id, ), new: ( fields: HarvestedRewardsEventV1Fields, ) => { return new HarvestedRewardsEventV1( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return HarvestedRewardsEventV1.reified() }

 static phantom( ): PhantomReified<ToTypeStr<HarvestedRewardsEventV1>> { return phantom(HarvestedRewardsEventV1.reified( )); } static get p() { return HarvestedRewardsEventV1.phantom() }

 static get bcs() { return bcs.struct("HarvestedRewardsEventV1", {

 vaultId: ID.bcs, rewardTypes: bcs.vector(String.bcs), rewardAmounts: bcs.vector(bcs.u64())

}) };

 static fromFields( fields: Record<string, any> ): HarvestedRewardsEventV1 { return HarvestedRewardsEventV1.reified( ).new( { vaultId: decodeFromFields(ID.reified(), fields.vaultId), rewardTypes: decodeFromFields(reified.vector(String.reified()), fields.rewardTypes), rewardAmounts: decodeFromFields(reified.vector("u64"), fields.rewardAmounts) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): HarvestedRewardsEventV1 { if (!isHarvestedRewardsEventV1(item.type)) { throw new Error("not a HarvestedRewardsEventV1 type");

 }

 return HarvestedRewardsEventV1.reified( ).new( { vaultId: decodeFromFieldsWithTypes(ID.reified(), item.fields.vaultId), rewardTypes: decodeFromFieldsWithTypes(reified.vector(String.reified()), item.fields.rewardTypes), rewardAmounts: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.rewardAmounts) } ) }

 static fromBcs( data: Uint8Array ): HarvestedRewardsEventV1 { return HarvestedRewardsEventV1.fromFields( HarvestedRewardsEventV1.bcs.parse(data) ) }

 toJSONField() { return {

 vaultId: this.vaultId,rewardTypes: fieldToJSON<Vector<String>>(`vector<${String.$typeName}>`, this.rewardTypes),rewardAmounts: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.rewardAmounts),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): HarvestedRewardsEventV1 { return HarvestedRewardsEventV1.reified( ).new( { vaultId: decodeFromJSONField(ID.reified(), field.vaultId), rewardTypes: decodeFromJSONField(reified.vector(String.reified()), field.rewardTypes), rewardAmounts: decodeFromJSONField(reified.vector("u64"), field.rewardAmounts) } ) }

 static fromJSON( json: Record<string, any> ): HarvestedRewardsEventV1 { if (json.$typeName !== HarvestedRewardsEventV1.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return HarvestedRewardsEventV1.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): HarvestedRewardsEventV1 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHarvestedRewardsEventV1(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a HarvestedRewardsEventV1 object`); } return HarvestedRewardsEventV1.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): HarvestedRewardsEventV1 { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHarvestedRewardsEventV1(data.bcs.type)) { throw new Error(`object at is not a HarvestedRewardsEventV1 object`); }

 return HarvestedRewardsEventV1.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return HarvestedRewardsEventV1.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<HarvestedRewardsEventV1> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching HarvestedRewardsEventV1 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHarvestedRewardsEventV1(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a HarvestedRewardsEventV1 object`); }

 return HarvestedRewardsEventV1.fromSuiObjectData( res.data ); }

 }

/* ============================== DestroyedStakedPositionEventV1 =============================== */

export function isDestroyedStakedPositionEventV1(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::events::DestroyedStakedPositionEventV1`; }

export interface DestroyedStakedPositionEventV1Fields { stakedPositionId: ToField<ID> }

export type DestroyedStakedPositionEventV1Reified = Reified< DestroyedStakedPositionEventV1, DestroyedStakedPositionEventV1Fields >;

export class DestroyedStakedPositionEventV1 implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::events::DestroyedStakedPositionEventV1`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DestroyedStakedPositionEventV1.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::events::DestroyedStakedPositionEventV1`; readonly $typeArgs: []; readonly $isPhantom = DestroyedStakedPositionEventV1.$isPhantom;

 readonly stakedPositionId: ToField<ID>

 private constructor(typeArgs: [], fields: DestroyedStakedPositionEventV1Fields, ) { this.$fullTypeName = composeSuiType( DestroyedStakedPositionEventV1.$typeName, ...typeArgs ) as `${typeof PKG_V1}::events::DestroyedStakedPositionEventV1`; this.$typeArgs = typeArgs;

 this.stakedPositionId = fields.stakedPositionId; }

 static reified( ): DestroyedStakedPositionEventV1Reified { return { typeName: DestroyedStakedPositionEventV1.$typeName, fullTypeName: composeSuiType( DestroyedStakedPositionEventV1.$typeName, ...[] ) as `${typeof PKG_V1}::events::DestroyedStakedPositionEventV1`, typeArgs: [ ] as [], isPhantom: DestroyedStakedPositionEventV1.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DestroyedStakedPositionEventV1.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DestroyedStakedPositionEventV1.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DestroyedStakedPositionEventV1.fromBcs( data, ), bcs: DestroyedStakedPositionEventV1.bcs, fromJSONField: (field: any) => DestroyedStakedPositionEventV1.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DestroyedStakedPositionEventV1.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DestroyedStakedPositionEventV1.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DestroyedStakedPositionEventV1.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DestroyedStakedPositionEventV1.fetch( client, id, ), new: ( fields: DestroyedStakedPositionEventV1Fields, ) => { return new DestroyedStakedPositionEventV1( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DestroyedStakedPositionEventV1.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DestroyedStakedPositionEventV1>> { return phantom(DestroyedStakedPositionEventV1.reified( )); } static get p() { return DestroyedStakedPositionEventV1.phantom() }

 static get bcs() { return bcs.struct("DestroyedStakedPositionEventV1", {

 stakedPositionId: ID.bcs

}) };

 static fromFields( fields: Record<string, any> ): DestroyedStakedPositionEventV1 { return DestroyedStakedPositionEventV1.reified( ).new( { stakedPositionId: decodeFromFields(ID.reified(), fields.stakedPositionId) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DestroyedStakedPositionEventV1 { if (!isDestroyedStakedPositionEventV1(item.type)) { throw new Error("not a DestroyedStakedPositionEventV1 type");

 }

 return DestroyedStakedPositionEventV1.reified( ).new( { stakedPositionId: decodeFromFieldsWithTypes(ID.reified(), item.fields.stakedPositionId) } ) }

 static fromBcs( data: Uint8Array ): DestroyedStakedPositionEventV1 { return DestroyedStakedPositionEventV1.fromFields( DestroyedStakedPositionEventV1.bcs.parse(data) ) }

 toJSONField() { return {

 stakedPositionId: this.stakedPositionId,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DestroyedStakedPositionEventV1 { return DestroyedStakedPositionEventV1.reified( ).new( { stakedPositionId: decodeFromJSONField(ID.reified(), field.stakedPositionId) } ) }

 static fromJSON( json: Record<string, any> ): DestroyedStakedPositionEventV1 { if (json.$typeName !== DestroyedStakedPositionEventV1.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DestroyedStakedPositionEventV1.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DestroyedStakedPositionEventV1 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDestroyedStakedPositionEventV1(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DestroyedStakedPositionEventV1 object`); } return DestroyedStakedPositionEventV1.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DestroyedStakedPositionEventV1 { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDestroyedStakedPositionEventV1(data.bcs.type)) { throw new Error(`object at is not a DestroyedStakedPositionEventV1 object`); }

 return DestroyedStakedPositionEventV1.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DestroyedStakedPositionEventV1.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DestroyedStakedPositionEventV1> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DestroyedStakedPositionEventV1 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDestroyedStakedPositionEventV1(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DestroyedStakedPositionEventV1 object`); }

 return DestroyedStakedPositionEventV1.fromSuiObjectData( res.data ); }

 }
