import {ID, UID} from "../../_dependencies/onchain/0x2/object/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== PACKAGE =============================== */

export function isPACKAGE(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::authority::PACKAGE` + '<'); }

export interface PACKAGEFields<T0 extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type PACKAGEReified<T0 extends PhantomTypeArgument> = Reified< PACKAGE<T0>, PACKAGEFields<T0> >;

export class PACKAGE<T0 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::authority::PACKAGE`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = PACKAGE.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::authority::PACKAGE<${PhantomToTypeStr<T0>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>]; readonly $isPhantom = PACKAGE.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: PACKAGEFields<T0>, ) { this.$fullTypeName = composeSuiType( PACKAGE.$typeName, ...typeArgs ) as `${typeof PKG_V1}::authority::PACKAGE<${PhantomToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PACKAGEReified<ToPhantomTypeArgument<T0>> { return { typeName: PACKAGE.$typeName, fullTypeName: composeSuiType( PACKAGE.$typeName, ...[extractType(T0)] ) as `${typeof PKG_V1}::authority::PACKAGE<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>], isPhantom: PACKAGE.$isPhantom, reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => PACKAGE.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PACKAGE.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => PACKAGE.fromBcs( T0, data, ), bcs: PACKAGE.bcs, fromJSONField: (field: any) => PACKAGE.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => PACKAGE.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => PACKAGE.fromSuiParsedData( T0, content, ), fromSuiObjectData: (content: SuiObjectData) => PACKAGE.fromSuiObjectData( T0, content, ), fetch: async (client: SuiClient, id: string) => PACKAGE.fetch( client, T0, id, ), new: ( fields: PACKAGEFields<ToPhantomTypeArgument<T0>>, ) => { return new PACKAGE( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return PACKAGE.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PhantomReified<ToTypeStr<PACKAGE<ToPhantomTypeArgument<T0>>>> { return phantom(PACKAGE.reified( T0 )); } static get p() { return PACKAGE.phantom }

 static get bcs() { return bcs.struct("PACKAGE", {

 dummyField: bcs.bool()

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, fields: Record<string, any> ): PACKAGE<ToPhantomTypeArgument<T0>> { return PACKAGE.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummyField) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, item: FieldsWithTypes ): PACKAGE<ToPhantomTypeArgument<T0>> { if (!isPACKAGE(item.type)) { throw new Error("not a PACKAGE type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return PACKAGE.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummyField) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: Uint8Array ): PACKAGE<ToPhantomTypeArgument<T0>> { return PACKAGE.fromFields( typeArg, PACKAGE.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, field: any ): PACKAGE<ToPhantomTypeArgument<T0>> { return PACKAGE.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, json: Record<string, any> ): PACKAGE<ToPhantomTypeArgument<T0>> { if (json.$typeName !== PACKAGE.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(PACKAGE.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return PACKAGE.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, content: SuiParsedData ): PACKAGE<ToPhantomTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPACKAGE(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PACKAGE object`); } return PACKAGE.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: SuiObjectData ): PACKAGE<ToPhantomTypeArgument<T0>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPACKAGE(data.bcs.type)) { throw new Error(`object at is not a PACKAGE object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return PACKAGE.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PACKAGE.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T0, id: string ): Promise<PACKAGE<ToPhantomTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PACKAGE object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPACKAGE(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PACKAGE object`); }

 return PACKAGE.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== VAULT =============================== */

export function isVAULT(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::authority::VAULT` + '<'); }

export interface VAULTFields<T0 extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type VAULTReified<T0 extends PhantomTypeArgument> = Reified< VAULT<T0>, VAULTFields<T0> >;

export class VAULT<T0 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::authority::VAULT`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = VAULT.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::authority::VAULT<${PhantomToTypeStr<T0>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>]; readonly $isPhantom = VAULT.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: VAULTFields<T0>, ) { this.$fullTypeName = composeSuiType( VAULT.$typeName, ...typeArgs ) as `${typeof PKG_V1}::authority::VAULT<${PhantomToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): VAULTReified<ToPhantomTypeArgument<T0>> { return { typeName: VAULT.$typeName, fullTypeName: composeSuiType( VAULT.$typeName, ...[extractType(T0)] ) as `${typeof PKG_V1}::authority::VAULT<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>], isPhantom: VAULT.$isPhantom, reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => VAULT.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => VAULT.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => VAULT.fromBcs( T0, data, ), bcs: VAULT.bcs, fromJSONField: (field: any) => VAULT.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => VAULT.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => VAULT.fromSuiParsedData( T0, content, ), fromSuiObjectData: (content: SuiObjectData) => VAULT.fromSuiObjectData( T0, content, ), fetch: async (client: SuiClient, id: string) => VAULT.fetch( client, T0, id, ), new: ( fields: VAULTFields<ToPhantomTypeArgument<T0>>, ) => { return new VAULT( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return VAULT.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PhantomReified<ToTypeStr<VAULT<ToPhantomTypeArgument<T0>>>> { return phantom(VAULT.reified( T0 )); } static get p() { return VAULT.phantom }

 static get bcs() { return bcs.struct("VAULT", {

 dummyField: bcs.bool()

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, fields: Record<string, any> ): VAULT<ToPhantomTypeArgument<T0>> { return VAULT.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummyField) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, item: FieldsWithTypes ): VAULT<ToPhantomTypeArgument<T0>> { if (!isVAULT(item.type)) { throw new Error("not a VAULT type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return VAULT.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummyField) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: Uint8Array ): VAULT<ToPhantomTypeArgument<T0>> { return VAULT.fromFields( typeArg, VAULT.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, field: any ): VAULT<ToPhantomTypeArgument<T0>> { return VAULT.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, json: Record<string, any> ): VAULT<ToPhantomTypeArgument<T0>> { if (json.$typeName !== VAULT.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(VAULT.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return VAULT.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, content: SuiParsedData ): VAULT<ToPhantomTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVAULT(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a VAULT object`); } return VAULT.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: SuiObjectData ): VAULT<ToPhantomTypeArgument<T0>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVAULT(data.bcs.type)) { throw new Error(`object at is not a VAULT object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return VAULT.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return VAULT.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T0, id: string ): Promise<VAULT<ToPhantomTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching VAULT object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVAULT(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a VAULT object`); }

 return VAULT.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== ADMIN =============================== */

export function isADMIN(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::authority::ADMIN`; }

export interface ADMINFields { dummyField: ToField<"bool"> }

export type ADMINReified = Reified< ADMIN, ADMINFields >;

export class ADMIN implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::authority::ADMIN`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ADMIN.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::authority::ADMIN`; readonly $typeArgs: []; readonly $isPhantom = ADMIN.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: ADMINFields, ) { this.$fullTypeName = composeSuiType( ADMIN.$typeName, ...typeArgs ) as `${typeof PKG_V1}::authority::ADMIN`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): ADMINReified { return { typeName: ADMIN.$typeName, fullTypeName: composeSuiType( ADMIN.$typeName, ...[] ) as `${typeof PKG_V1}::authority::ADMIN`, typeArgs: [ ] as [], isPhantom: ADMIN.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ADMIN.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ADMIN.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ADMIN.fromBcs( data, ), bcs: ADMIN.bcs, fromJSONField: (field: any) => ADMIN.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ADMIN.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ADMIN.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ADMIN.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ADMIN.fetch( client, id, ), new: ( fields: ADMINFields, ) => { return new ADMIN( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ADMIN.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ADMIN>> { return phantom(ADMIN.reified( )); } static get p() { return ADMIN.phantom() }

 static get bcs() { return bcs.struct("ADMIN", {

 dummyField: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): ADMIN { return ADMIN.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummyField) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ADMIN { if (!isADMIN(item.type)) { throw new Error("not a ADMIN type");

 }

 return ADMIN.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummyField) } ) }

 static fromBcs( data: Uint8Array ): ADMIN { return ADMIN.fromFields( ADMIN.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ADMIN { return ADMIN.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): ADMIN { if (json.$typeName !== ADMIN.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ADMIN.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ADMIN { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isADMIN(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ADMIN object`); } return ADMIN.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ADMIN { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isADMIN(data.bcs.type)) { throw new Error(`object at is not a ADMIN object`); }

 return ADMIN.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ADMIN.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ADMIN> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ADMIN object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isADMIN(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ADMIN object`); }

 return ADMIN.fromSuiObjectData( res.data ); }

 }

/* ============================== AuthorityCap =============================== */

export function isAuthorityCap(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::authority::AuthorityCap` + '<'); }

export interface AuthorityCapFields<T0 extends PhantomTypeArgument> { id: ToField<UID>; for: ToField<ID> }

export type AuthorityCapReified<T0 extends PhantomTypeArgument> = Reified< AuthorityCap<T0>, AuthorityCapFields<T0> >;

export class AuthorityCap<T0 extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::authority::AuthorityCap`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = AuthorityCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::authority::AuthorityCap<${PhantomToTypeStr<T0>}>`; readonly $typeArgs: [PhantomToTypeStr<T0>]; readonly $isPhantom = AuthorityCap.$isPhantom;

 readonly id: ToField<UID>; readonly for: ToField<ID>

 private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: AuthorityCapFields<T0>, ) { this.$fullTypeName = composeSuiType( AuthorityCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::authority::AuthorityCap<${PhantomToTypeStr<T0>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.for = fields.for; }

 static reified<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): AuthorityCapReified<ToPhantomTypeArgument<T0>> { return { typeName: AuthorityCap.$typeName, fullTypeName: composeSuiType( AuthorityCap.$typeName, ...[extractType(T0)] ) as `${typeof PKG_V1}::authority::AuthorityCap<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`, typeArgs: [ extractType(T0) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>], isPhantom: AuthorityCap.$isPhantom, reifiedTypeArgs: [T0], fromFields: (fields: Record<string, any>) => AuthorityCap.fromFields( T0, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AuthorityCap.fromFieldsWithTypes( T0, item, ), fromBcs: (data: Uint8Array) => AuthorityCap.fromBcs( T0, data, ), bcs: AuthorityCap.bcs, fromJSONField: (field: any) => AuthorityCap.fromJSONField( T0, field, ), fromJSON: (json: Record<string, any>) => AuthorityCap.fromJSON( T0, json, ), fromSuiParsedData: (content: SuiParsedData) => AuthorityCap.fromSuiParsedData( T0, content, ), fromSuiObjectData: (content: SuiObjectData) => AuthorityCap.fromSuiObjectData( T0, content, ), fetch: async (client: SuiClient, id: string) => AuthorityCap.fetch( client, T0, id, ), new: ( fields: AuthorityCapFields<ToPhantomTypeArgument<T0>>, ) => { return new AuthorityCap( [extractType(T0)], fields ) }, kind: "StructClassReified", } }

 static get r() { return AuthorityCap.reified }

 static phantom<T0 extends PhantomReified<PhantomTypeArgument>>( T0: T0 ): PhantomReified<ToTypeStr<AuthorityCap<ToPhantomTypeArgument<T0>>>> { return phantom(AuthorityCap.reified( T0 )); } static get p() { return AuthorityCap.phantom }

 static get bcs() { return bcs.struct("AuthorityCap", {

 id: UID.bcs, for: ID.bcs

}) };

 static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, fields: Record<string, any> ): AuthorityCap<ToPhantomTypeArgument<T0>> { return AuthorityCap.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), for: decodeFromFields(ID.reified(), fields.for) } ) }

 static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, item: FieldsWithTypes ): AuthorityCap<ToPhantomTypeArgument<T0>> { if (!isAuthorityCap(item.type)) { throw new Error("not a AuthorityCap type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return AuthorityCap.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), for: decodeFromFieldsWithTypes(ID.reified(), item.fields.for) } ) }

 static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: Uint8Array ): AuthorityCap<ToPhantomTypeArgument<T0>> { return AuthorityCap.fromFields( typeArg, AuthorityCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,for: this.for,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, field: any ): AuthorityCap<ToPhantomTypeArgument<T0>> { return AuthorityCap.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), for: decodeFromJSONField(ID.reified(), field.for) } ) }

 static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, json: Record<string, any> ): AuthorityCap<ToPhantomTypeArgument<T0>> { if (json.$typeName !== AuthorityCap.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(AuthorityCap.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return AuthorityCap.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, content: SuiParsedData ): AuthorityCap<ToPhantomTypeArgument<T0>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAuthorityCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AuthorityCap object`); } return AuthorityCap.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>( typeArg: T0, data: SuiObjectData ): AuthorityCap<ToPhantomTypeArgument<T0>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isAuthorityCap(data.bcs.type)) { throw new Error(`object at is not a AuthorityCap object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return AuthorityCap.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return AuthorityCap.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T0, id: string ): Promise<AuthorityCap<ToPhantomTypeArgument<T0>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AuthorityCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAuthorityCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AuthorityCap object`); }

 return AuthorityCap.fromSuiObjectData( typeArg, res.data ); }

 }
