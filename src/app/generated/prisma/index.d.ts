
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model TypeVetement
 * 
 */
export type TypeVetement = $Result.DefaultSelection<Prisma.$TypeVetementPayload>
/**
 * Model Lot
 * 
 */
export type Lot = $Result.DefaultSelection<Prisma.$LotPayload>
/**
 * Model Vetement
 * 
 */
export type Vetement = $Result.DefaultSelection<Prisma.$VetementPayload>
/**
 * Model Paiement
 * 
 */
export type Paiement = $Result.DefaultSelection<Prisma.$PaiementPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.typeVetement`: Exposes CRUD operations for the **TypeVetement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TypeVetements
    * const typeVetements = await prisma.typeVetement.findMany()
    * ```
    */
  get typeVetement(): Prisma.TypeVetementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lot`: Exposes CRUD operations for the **Lot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lots
    * const lots = await prisma.lot.findMany()
    * ```
    */
  get lot(): Prisma.LotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vetement`: Exposes CRUD operations for the **Vetement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vetements
    * const vetements = await prisma.vetement.findMany()
    * ```
    */
  get vetement(): Prisma.VetementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paiement`: Exposes CRUD operations for the **Paiement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paiements
    * const paiements = await prisma.paiement.findMany()
    * ```
    */
  get paiement(): Prisma.PaiementDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Client: 'Client',
    TypeVetement: 'TypeVetement',
    Lot: 'Lot',
    Vetement: 'Vetement',
    Paiement: 'Paiement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "client" | "typeVetement" | "lot" | "vetement" | "paiement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      TypeVetement: {
        payload: Prisma.$TypeVetementPayload<ExtArgs>
        fields: Prisma.TypeVetementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeVetementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeVetementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeVetementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeVetementPayload>
          }
          findFirst: {
            args: Prisma.TypeVetementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeVetementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeVetementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeVetementPayload>
          }
          findMany: {
            args: Prisma.TypeVetementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeVetementPayload>[]
          }
          create: {
            args: Prisma.TypeVetementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeVetementPayload>
          }
          createMany: {
            args: Prisma.TypeVetementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TypeVetementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeVetementPayload>[]
          }
          delete: {
            args: Prisma.TypeVetementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeVetementPayload>
          }
          update: {
            args: Prisma.TypeVetementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeVetementPayload>
          }
          deleteMany: {
            args: Prisma.TypeVetementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypeVetementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TypeVetementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeVetementPayload>[]
          }
          upsert: {
            args: Prisma.TypeVetementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeVetementPayload>
          }
          aggregate: {
            args: Prisma.TypeVetementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTypeVetement>
          }
          groupBy: {
            args: Prisma.TypeVetementGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeVetementGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeVetementCountArgs<ExtArgs>
            result: $Utils.Optional<TypeVetementCountAggregateOutputType> | number
          }
        }
      }
      Lot: {
        payload: Prisma.$LotPayload<ExtArgs>
        fields: Prisma.LotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          findFirst: {
            args: Prisma.LotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          findMany: {
            args: Prisma.LotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>[]
          }
          create: {
            args: Prisma.LotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          createMany: {
            args: Prisma.LotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>[]
          }
          delete: {
            args: Prisma.LotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          update: {
            args: Prisma.LotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          deleteMany: {
            args: Prisma.LotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>[]
          }
          upsert: {
            args: Prisma.LotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          aggregate: {
            args: Prisma.LotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLot>
          }
          groupBy: {
            args: Prisma.LotGroupByArgs<ExtArgs>
            result: $Utils.Optional<LotGroupByOutputType>[]
          }
          count: {
            args: Prisma.LotCountArgs<ExtArgs>
            result: $Utils.Optional<LotCountAggregateOutputType> | number
          }
        }
      }
      Vetement: {
        payload: Prisma.$VetementPayload<ExtArgs>
        fields: Prisma.VetementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VetementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VetementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetementPayload>
          }
          findFirst: {
            args: Prisma.VetementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VetementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetementPayload>
          }
          findMany: {
            args: Prisma.VetementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetementPayload>[]
          }
          create: {
            args: Prisma.VetementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetementPayload>
          }
          createMany: {
            args: Prisma.VetementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VetementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetementPayload>[]
          }
          delete: {
            args: Prisma.VetementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetementPayload>
          }
          update: {
            args: Prisma.VetementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetementPayload>
          }
          deleteMany: {
            args: Prisma.VetementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VetementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VetementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetementPayload>[]
          }
          upsert: {
            args: Prisma.VetementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VetementPayload>
          }
          aggregate: {
            args: Prisma.VetementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVetement>
          }
          groupBy: {
            args: Prisma.VetementGroupByArgs<ExtArgs>
            result: $Utils.Optional<VetementGroupByOutputType>[]
          }
          count: {
            args: Prisma.VetementCountArgs<ExtArgs>
            result: $Utils.Optional<VetementCountAggregateOutputType> | number
          }
        }
      }
      Paiement: {
        payload: Prisma.$PaiementPayload<ExtArgs>
        fields: Prisma.PaiementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaiementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaiementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findFirst: {
            args: Prisma.PaiementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaiementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findMany: {
            args: Prisma.PaiementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          create: {
            args: Prisma.PaiementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          createMany: {
            args: Prisma.PaiementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaiementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          delete: {
            args: Prisma.PaiementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          update: {
            args: Prisma.PaiementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          deleteMany: {
            args: Prisma.PaiementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaiementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaiementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          upsert: {
            args: Prisma.PaiementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          aggregate: {
            args: Prisma.PaiementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaiement>
          }
          groupBy: {
            args: Prisma.PaiementGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaiementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaiementCountArgs<ExtArgs>
            result: $Utils.Optional<PaiementCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    client?: ClientOmit
    typeVetement?: TypeVetementOmit
    lot?: LotOmit
    vetement?: VetementOmit
    paiement?: PaiementOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    clients: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | UserCountOutputTypeCountClientsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    lots: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lots?: boolean | ClientCountOutputTypeCountLotsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountLotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LotWhereInput
  }


  /**
   * Count Type TypeVetementCountOutputType
   */

  export type TypeVetementCountOutputType = {
    vetements: number
  }

  export type TypeVetementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vetements?: boolean | TypeVetementCountOutputTypeCountVetementsArgs
  }

  // Custom InputTypes
  /**
   * TypeVetementCountOutputType without action
   */
  export type TypeVetementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeVetementCountOutputType
     */
    select?: TypeVetementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeVetementCountOutputType without action
   */
  export type TypeVetementCountOutputTypeCountVetementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VetementWhereInput
  }


  /**
   * Count Type LotCountOutputType
   */

  export type LotCountOutputType = {
    vetements: number
    paiements: number
  }

  export type LotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vetements?: boolean | LotCountOutputTypeCountVetementsArgs
    paiements?: boolean | LotCountOutputTypeCountPaiementsArgs
  }

  // Custom InputTypes
  /**
   * LotCountOutputType without action
   */
  export type LotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotCountOutputType
     */
    select?: LotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LotCountOutputType without action
   */
  export type LotCountOutputTypeCountVetementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VetementWhereInput
  }

  /**
   * LotCountOutputType without action
   */
  export type LotCountOutputTypeCountPaiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    idUser: string | null
    nom: string | null
    clerkId: string | null
    email: string | null
    role: string | null
    telephone: string | null
    profilePicture: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    idUser: string | null
    nom: string | null
    clerkId: string | null
    email: string | null
    role: string | null
    telephone: string | null
    profilePicture: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    idUser: number
    nom: number
    clerkId: number
    email: number
    role: number
    telephone: number
    profilePicture: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    idUser?: true
    nom?: true
    clerkId?: true
    email?: true
    role?: true
    telephone?: true
    profilePicture?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    idUser?: true
    nom?: true
    clerkId?: true
    email?: true
    role?: true
    telephone?: true
    profilePicture?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    idUser?: true
    nom?: true
    clerkId?: true
    email?: true
    role?: true
    telephone?: true
    profilePicture?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    idUser: string
    nom: string
    clerkId: string
    email: string
    role: string
    telephone: string | null
    profilePicture: string | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUser?: boolean
    nom?: boolean
    clerkId?: boolean
    email?: boolean
    role?: boolean
    telephone?: boolean
    profilePicture?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clients?: boolean | User$clientsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUser?: boolean
    nom?: boolean
    clerkId?: boolean
    email?: boolean
    role?: boolean
    telephone?: boolean
    profilePicture?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUser?: boolean
    nom?: boolean
    clerkId?: boolean
    email?: boolean
    role?: boolean
    telephone?: boolean
    profilePicture?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    idUser?: boolean
    nom?: boolean
    clerkId?: boolean
    email?: boolean
    role?: boolean
    telephone?: boolean
    profilePicture?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idUser" | "nom" | "clerkId" | "email" | "role" | "telephone" | "profilePicture" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | User$clientsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      clients: Prisma.$ClientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idUser: string
      nom: string
      clerkId: string
      email: string
      role: string
      telephone: string | null
      profilePicture: string | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `idUser`
     * const userWithIdUserOnly = await prisma.user.findMany({ select: { idUser: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `idUser`
     * const userWithIdUserOnly = await prisma.user.createManyAndReturn({
     *   select: { idUser: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `idUser`
     * const userWithIdUserOnly = await prisma.user.updateManyAndReturn({
     *   select: { idUser: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends User$clientsArgs<ExtArgs> = {}>(args?: Subset<T, User$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly idUser: FieldRef<"User", 'String'>
    readonly nom: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly telephone: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.clients
   */
  export type User$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    idClient: string | null
    nom: string | null
    telephone: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type ClientMaxAggregateOutputType = {
    idClient: string | null
    nom: string | null
    telephone: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type ClientCountAggregateOutputType = {
    idClient: number
    nom: number
    telephone: number
    createdAt: number
    userId: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    idClient?: true
    nom?: true
    telephone?: true
    createdAt?: true
    userId?: true
  }

  export type ClientMaxAggregateInputType = {
    idClient?: true
    nom?: true
    telephone?: true
    createdAt?: true
    userId?: true
  }

  export type ClientCountAggregateInputType = {
    idClient?: true
    nom?: true
    telephone?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    idClient: string
    nom: string
    telephone: string | null
    createdAt: Date
    userId: string
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idClient?: boolean
    nom?: boolean
    telephone?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lots?: boolean | Client$lotsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idClient?: boolean
    nom?: boolean
    telephone?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idClient?: boolean
    nom?: boolean
    telephone?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    idClient?: boolean
    nom?: boolean
    telephone?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idClient" | "nom" | "telephone" | "createdAt" | "userId", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lots?: boolean | Client$lotsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lots: Prisma.$LotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idClient: string
      nom: string
      telephone: string | null
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `idClient`
     * const clientWithIdClientOnly = await prisma.client.findMany({ select: { idClient: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `idClient`
     * const clientWithIdClientOnly = await prisma.client.createManyAndReturn({
     *   select: { idClient: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `idClient`
     * const clientWithIdClientOnly = await prisma.client.updateManyAndReturn({
     *   select: { idClient: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lots<T extends Client$lotsArgs<ExtArgs> = {}>(args?: Subset<T, Client$lotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly idClient: FieldRef<"Client", 'String'>
    readonly nom: FieldRef<"Client", 'String'>
    readonly telephone: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly userId: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.lots
   */
  export type Client$lotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    where?: LotWhereInput
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    cursor?: LotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LotScalarFieldEnum | LotScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model TypeVetement
   */

  export type AggregateTypeVetement = {
    _count: TypeVetementCountAggregateOutputType | null
    _avg: TypeVetementAvgAggregateOutputType | null
    _sum: TypeVetementSumAggregateOutputType | null
    _min: TypeVetementMinAggregateOutputType | null
    _max: TypeVetementMaxAggregateOutputType | null
  }

  export type TypeVetementAvgAggregateOutputType = {
    prix: number | null
  }

  export type TypeVetementSumAggregateOutputType = {
    prix: number | null
  }

  export type TypeVetementMinAggregateOutputType = {
    idType: string | null
    nom: string | null
    prix: number | null
  }

  export type TypeVetementMaxAggregateOutputType = {
    idType: string | null
    nom: string | null
    prix: number | null
  }

  export type TypeVetementCountAggregateOutputType = {
    idType: number
    nom: number
    prix: number
    _all: number
  }


  export type TypeVetementAvgAggregateInputType = {
    prix?: true
  }

  export type TypeVetementSumAggregateInputType = {
    prix?: true
  }

  export type TypeVetementMinAggregateInputType = {
    idType?: true
    nom?: true
    prix?: true
  }

  export type TypeVetementMaxAggregateInputType = {
    idType?: true
    nom?: true
    prix?: true
  }

  export type TypeVetementCountAggregateInputType = {
    idType?: true
    nom?: true
    prix?: true
    _all?: true
  }

  export type TypeVetementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeVetement to aggregate.
     */
    where?: TypeVetementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeVetements to fetch.
     */
    orderBy?: TypeVetementOrderByWithRelationInput | TypeVetementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeVetementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeVetements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeVetements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TypeVetements
    **/
    _count?: true | TypeVetementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeVetementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeVetementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeVetementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeVetementMaxAggregateInputType
  }

  export type GetTypeVetementAggregateType<T extends TypeVetementAggregateArgs> = {
        [P in keyof T & keyof AggregateTypeVetement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypeVetement[P]>
      : GetScalarType<T[P], AggregateTypeVetement[P]>
  }




  export type TypeVetementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeVetementWhereInput
    orderBy?: TypeVetementOrderByWithAggregationInput | TypeVetementOrderByWithAggregationInput[]
    by: TypeVetementScalarFieldEnum[] | TypeVetementScalarFieldEnum
    having?: TypeVetementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeVetementCountAggregateInputType | true
    _avg?: TypeVetementAvgAggregateInputType
    _sum?: TypeVetementSumAggregateInputType
    _min?: TypeVetementMinAggregateInputType
    _max?: TypeVetementMaxAggregateInputType
  }

  export type TypeVetementGroupByOutputType = {
    idType: string
    nom: string
    prix: number
    _count: TypeVetementCountAggregateOutputType | null
    _avg: TypeVetementAvgAggregateOutputType | null
    _sum: TypeVetementSumAggregateOutputType | null
    _min: TypeVetementMinAggregateOutputType | null
    _max: TypeVetementMaxAggregateOutputType | null
  }

  type GetTypeVetementGroupByPayload<T extends TypeVetementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeVetementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeVetementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeVetementGroupByOutputType[P]>
            : GetScalarType<T[P], TypeVetementGroupByOutputType[P]>
        }
      >
    >


  export type TypeVetementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idType?: boolean
    nom?: boolean
    prix?: boolean
    vetements?: boolean | TypeVetement$vetementsArgs<ExtArgs>
    _count?: boolean | TypeVetementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typeVetement"]>

  export type TypeVetementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idType?: boolean
    nom?: boolean
    prix?: boolean
  }, ExtArgs["result"]["typeVetement"]>

  export type TypeVetementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idType?: boolean
    nom?: boolean
    prix?: boolean
  }, ExtArgs["result"]["typeVetement"]>

  export type TypeVetementSelectScalar = {
    idType?: boolean
    nom?: boolean
    prix?: boolean
  }

  export type TypeVetementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idType" | "nom" | "prix", ExtArgs["result"]["typeVetement"]>
  export type TypeVetementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vetements?: boolean | TypeVetement$vetementsArgs<ExtArgs>
    _count?: boolean | TypeVetementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TypeVetementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TypeVetementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TypeVetementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TypeVetement"
    objects: {
      vetements: Prisma.$VetementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idType: string
      nom: string
      prix: number
    }, ExtArgs["result"]["typeVetement"]>
    composites: {}
  }

  type TypeVetementGetPayload<S extends boolean | null | undefined | TypeVetementDefaultArgs> = $Result.GetResult<Prisma.$TypeVetementPayload, S>

  type TypeVetementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TypeVetementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypeVetementCountAggregateInputType | true
    }

  export interface TypeVetementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TypeVetement'], meta: { name: 'TypeVetement' } }
    /**
     * Find zero or one TypeVetement that matches the filter.
     * @param {TypeVetementFindUniqueArgs} args - Arguments to find a TypeVetement
     * @example
     * // Get one TypeVetement
     * const typeVetement = await prisma.typeVetement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeVetementFindUniqueArgs>(args: SelectSubset<T, TypeVetementFindUniqueArgs<ExtArgs>>): Prisma__TypeVetementClient<$Result.GetResult<Prisma.$TypeVetementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TypeVetement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeVetementFindUniqueOrThrowArgs} args - Arguments to find a TypeVetement
     * @example
     * // Get one TypeVetement
     * const typeVetement = await prisma.typeVetement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeVetementFindUniqueOrThrowArgs>(args: SelectSubset<T, TypeVetementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypeVetementClient<$Result.GetResult<Prisma.$TypeVetementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TypeVetement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeVetementFindFirstArgs} args - Arguments to find a TypeVetement
     * @example
     * // Get one TypeVetement
     * const typeVetement = await prisma.typeVetement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeVetementFindFirstArgs>(args?: SelectSubset<T, TypeVetementFindFirstArgs<ExtArgs>>): Prisma__TypeVetementClient<$Result.GetResult<Prisma.$TypeVetementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TypeVetement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeVetementFindFirstOrThrowArgs} args - Arguments to find a TypeVetement
     * @example
     * // Get one TypeVetement
     * const typeVetement = await prisma.typeVetement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeVetementFindFirstOrThrowArgs>(args?: SelectSubset<T, TypeVetementFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypeVetementClient<$Result.GetResult<Prisma.$TypeVetementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TypeVetements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeVetementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TypeVetements
     * const typeVetements = await prisma.typeVetement.findMany()
     * 
     * // Get first 10 TypeVetements
     * const typeVetements = await prisma.typeVetement.findMany({ take: 10 })
     * 
     * // Only select the `idType`
     * const typeVetementWithIdTypeOnly = await prisma.typeVetement.findMany({ select: { idType: true } })
     * 
     */
    findMany<T extends TypeVetementFindManyArgs>(args?: SelectSubset<T, TypeVetementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeVetementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TypeVetement.
     * @param {TypeVetementCreateArgs} args - Arguments to create a TypeVetement.
     * @example
     * // Create one TypeVetement
     * const TypeVetement = await prisma.typeVetement.create({
     *   data: {
     *     // ... data to create a TypeVetement
     *   }
     * })
     * 
     */
    create<T extends TypeVetementCreateArgs>(args: SelectSubset<T, TypeVetementCreateArgs<ExtArgs>>): Prisma__TypeVetementClient<$Result.GetResult<Prisma.$TypeVetementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TypeVetements.
     * @param {TypeVetementCreateManyArgs} args - Arguments to create many TypeVetements.
     * @example
     * // Create many TypeVetements
     * const typeVetement = await prisma.typeVetement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypeVetementCreateManyArgs>(args?: SelectSubset<T, TypeVetementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TypeVetements and returns the data saved in the database.
     * @param {TypeVetementCreateManyAndReturnArgs} args - Arguments to create many TypeVetements.
     * @example
     * // Create many TypeVetements
     * const typeVetement = await prisma.typeVetement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TypeVetements and only return the `idType`
     * const typeVetementWithIdTypeOnly = await prisma.typeVetement.createManyAndReturn({
     *   select: { idType: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TypeVetementCreateManyAndReturnArgs>(args?: SelectSubset<T, TypeVetementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeVetementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TypeVetement.
     * @param {TypeVetementDeleteArgs} args - Arguments to delete one TypeVetement.
     * @example
     * // Delete one TypeVetement
     * const TypeVetement = await prisma.typeVetement.delete({
     *   where: {
     *     // ... filter to delete one TypeVetement
     *   }
     * })
     * 
     */
    delete<T extends TypeVetementDeleteArgs>(args: SelectSubset<T, TypeVetementDeleteArgs<ExtArgs>>): Prisma__TypeVetementClient<$Result.GetResult<Prisma.$TypeVetementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TypeVetement.
     * @param {TypeVetementUpdateArgs} args - Arguments to update one TypeVetement.
     * @example
     * // Update one TypeVetement
     * const typeVetement = await prisma.typeVetement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypeVetementUpdateArgs>(args: SelectSubset<T, TypeVetementUpdateArgs<ExtArgs>>): Prisma__TypeVetementClient<$Result.GetResult<Prisma.$TypeVetementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TypeVetements.
     * @param {TypeVetementDeleteManyArgs} args - Arguments to filter TypeVetements to delete.
     * @example
     * // Delete a few TypeVetements
     * const { count } = await prisma.typeVetement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypeVetementDeleteManyArgs>(args?: SelectSubset<T, TypeVetementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypeVetements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeVetementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TypeVetements
     * const typeVetement = await prisma.typeVetement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypeVetementUpdateManyArgs>(args: SelectSubset<T, TypeVetementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypeVetements and returns the data updated in the database.
     * @param {TypeVetementUpdateManyAndReturnArgs} args - Arguments to update many TypeVetements.
     * @example
     * // Update many TypeVetements
     * const typeVetement = await prisma.typeVetement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TypeVetements and only return the `idType`
     * const typeVetementWithIdTypeOnly = await prisma.typeVetement.updateManyAndReturn({
     *   select: { idType: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TypeVetementUpdateManyAndReturnArgs>(args: SelectSubset<T, TypeVetementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeVetementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TypeVetement.
     * @param {TypeVetementUpsertArgs} args - Arguments to update or create a TypeVetement.
     * @example
     * // Update or create a TypeVetement
     * const typeVetement = await prisma.typeVetement.upsert({
     *   create: {
     *     // ... data to create a TypeVetement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TypeVetement we want to update
     *   }
     * })
     */
    upsert<T extends TypeVetementUpsertArgs>(args: SelectSubset<T, TypeVetementUpsertArgs<ExtArgs>>): Prisma__TypeVetementClient<$Result.GetResult<Prisma.$TypeVetementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TypeVetements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeVetementCountArgs} args - Arguments to filter TypeVetements to count.
     * @example
     * // Count the number of TypeVetements
     * const count = await prisma.typeVetement.count({
     *   where: {
     *     // ... the filter for the TypeVetements we want to count
     *   }
     * })
    **/
    count<T extends TypeVetementCountArgs>(
      args?: Subset<T, TypeVetementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeVetementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TypeVetement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeVetementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypeVetementAggregateArgs>(args: Subset<T, TypeVetementAggregateArgs>): Prisma.PrismaPromise<GetTypeVetementAggregateType<T>>

    /**
     * Group by TypeVetement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeVetementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TypeVetementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeVetementGroupByArgs['orderBy'] }
        : { orderBy?: TypeVetementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TypeVetementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeVetementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TypeVetement model
   */
  readonly fields: TypeVetementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TypeVetement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeVetementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vetements<T extends TypeVetement$vetementsArgs<ExtArgs> = {}>(args?: Subset<T, TypeVetement$vetementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VetementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TypeVetement model
   */
  interface TypeVetementFieldRefs {
    readonly idType: FieldRef<"TypeVetement", 'String'>
    readonly nom: FieldRef<"TypeVetement", 'String'>
    readonly prix: FieldRef<"TypeVetement", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * TypeVetement findUnique
   */
  export type TypeVetementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeVetement
     */
    select?: TypeVetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeVetement
     */
    omit?: TypeVetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeVetementInclude<ExtArgs> | null
    /**
     * Filter, which TypeVetement to fetch.
     */
    where: TypeVetementWhereUniqueInput
  }

  /**
   * TypeVetement findUniqueOrThrow
   */
  export type TypeVetementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeVetement
     */
    select?: TypeVetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeVetement
     */
    omit?: TypeVetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeVetementInclude<ExtArgs> | null
    /**
     * Filter, which TypeVetement to fetch.
     */
    where: TypeVetementWhereUniqueInput
  }

  /**
   * TypeVetement findFirst
   */
  export type TypeVetementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeVetement
     */
    select?: TypeVetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeVetement
     */
    omit?: TypeVetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeVetementInclude<ExtArgs> | null
    /**
     * Filter, which TypeVetement to fetch.
     */
    where?: TypeVetementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeVetements to fetch.
     */
    orderBy?: TypeVetementOrderByWithRelationInput | TypeVetementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeVetements.
     */
    cursor?: TypeVetementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeVetements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeVetements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeVetements.
     */
    distinct?: TypeVetementScalarFieldEnum | TypeVetementScalarFieldEnum[]
  }

  /**
   * TypeVetement findFirstOrThrow
   */
  export type TypeVetementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeVetement
     */
    select?: TypeVetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeVetement
     */
    omit?: TypeVetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeVetementInclude<ExtArgs> | null
    /**
     * Filter, which TypeVetement to fetch.
     */
    where?: TypeVetementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeVetements to fetch.
     */
    orderBy?: TypeVetementOrderByWithRelationInput | TypeVetementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeVetements.
     */
    cursor?: TypeVetementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeVetements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeVetements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeVetements.
     */
    distinct?: TypeVetementScalarFieldEnum | TypeVetementScalarFieldEnum[]
  }

  /**
   * TypeVetement findMany
   */
  export type TypeVetementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeVetement
     */
    select?: TypeVetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeVetement
     */
    omit?: TypeVetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeVetementInclude<ExtArgs> | null
    /**
     * Filter, which TypeVetements to fetch.
     */
    where?: TypeVetementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeVetements to fetch.
     */
    orderBy?: TypeVetementOrderByWithRelationInput | TypeVetementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TypeVetements.
     */
    cursor?: TypeVetementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeVetements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeVetements.
     */
    skip?: number
    distinct?: TypeVetementScalarFieldEnum | TypeVetementScalarFieldEnum[]
  }

  /**
   * TypeVetement create
   */
  export type TypeVetementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeVetement
     */
    select?: TypeVetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeVetement
     */
    omit?: TypeVetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeVetementInclude<ExtArgs> | null
    /**
     * The data needed to create a TypeVetement.
     */
    data: XOR<TypeVetementCreateInput, TypeVetementUncheckedCreateInput>
  }

  /**
   * TypeVetement createMany
   */
  export type TypeVetementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TypeVetements.
     */
    data: TypeVetementCreateManyInput | TypeVetementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TypeVetement createManyAndReturn
   */
  export type TypeVetementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeVetement
     */
    select?: TypeVetementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TypeVetement
     */
    omit?: TypeVetementOmit<ExtArgs> | null
    /**
     * The data used to create many TypeVetements.
     */
    data: TypeVetementCreateManyInput | TypeVetementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TypeVetement update
   */
  export type TypeVetementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeVetement
     */
    select?: TypeVetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeVetement
     */
    omit?: TypeVetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeVetementInclude<ExtArgs> | null
    /**
     * The data needed to update a TypeVetement.
     */
    data: XOR<TypeVetementUpdateInput, TypeVetementUncheckedUpdateInput>
    /**
     * Choose, which TypeVetement to update.
     */
    where: TypeVetementWhereUniqueInput
  }

  /**
   * TypeVetement updateMany
   */
  export type TypeVetementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TypeVetements.
     */
    data: XOR<TypeVetementUpdateManyMutationInput, TypeVetementUncheckedUpdateManyInput>
    /**
     * Filter which TypeVetements to update
     */
    where?: TypeVetementWhereInput
    /**
     * Limit how many TypeVetements to update.
     */
    limit?: number
  }

  /**
   * TypeVetement updateManyAndReturn
   */
  export type TypeVetementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeVetement
     */
    select?: TypeVetementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TypeVetement
     */
    omit?: TypeVetementOmit<ExtArgs> | null
    /**
     * The data used to update TypeVetements.
     */
    data: XOR<TypeVetementUpdateManyMutationInput, TypeVetementUncheckedUpdateManyInput>
    /**
     * Filter which TypeVetements to update
     */
    where?: TypeVetementWhereInput
    /**
     * Limit how many TypeVetements to update.
     */
    limit?: number
  }

  /**
   * TypeVetement upsert
   */
  export type TypeVetementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeVetement
     */
    select?: TypeVetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeVetement
     */
    omit?: TypeVetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeVetementInclude<ExtArgs> | null
    /**
     * The filter to search for the TypeVetement to update in case it exists.
     */
    where: TypeVetementWhereUniqueInput
    /**
     * In case the TypeVetement found by the `where` argument doesn't exist, create a new TypeVetement with this data.
     */
    create: XOR<TypeVetementCreateInput, TypeVetementUncheckedCreateInput>
    /**
     * In case the TypeVetement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeVetementUpdateInput, TypeVetementUncheckedUpdateInput>
  }

  /**
   * TypeVetement delete
   */
  export type TypeVetementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeVetement
     */
    select?: TypeVetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeVetement
     */
    omit?: TypeVetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeVetementInclude<ExtArgs> | null
    /**
     * Filter which TypeVetement to delete.
     */
    where: TypeVetementWhereUniqueInput
  }

  /**
   * TypeVetement deleteMany
   */
  export type TypeVetementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeVetements to delete
     */
    where?: TypeVetementWhereInput
    /**
     * Limit how many TypeVetements to delete.
     */
    limit?: number
  }

  /**
   * TypeVetement.vetements
   */
  export type TypeVetement$vetementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vetement
     */
    select?: VetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vetement
     */
    omit?: VetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetementInclude<ExtArgs> | null
    where?: VetementWhereInput
    orderBy?: VetementOrderByWithRelationInput | VetementOrderByWithRelationInput[]
    cursor?: VetementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VetementScalarFieldEnum | VetementScalarFieldEnum[]
  }

  /**
   * TypeVetement without action
   */
  export type TypeVetementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeVetement
     */
    select?: TypeVetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeVetement
     */
    omit?: TypeVetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeVetementInclude<ExtArgs> | null
  }


  /**
   * Model Lot
   */

  export type AggregateLot = {
    _count: LotCountAggregateOutputType | null
    _avg: LotAvgAggregateOutputType | null
    _sum: LotSumAggregateOutputType | null
    _min: LotMinAggregateOutputType | null
    _max: LotMaxAggregateOutputType | null
  }

  export type LotAvgAggregateOutputType = {
    totalAmount: number | null
    solde: number | null
  }

  export type LotSumAggregateOutputType = {
    totalAmount: number | null
    solde: number | null
  }

  export type LotMinAggregateOutputType = {
    idLot: string | null
    dateEntree: Date | null
    dateReccup: string | null
    totalAmount: number | null
    solde: number | null
    statut: string | null
    clientId: string | null
    createdAt: Date | null
  }

  export type LotMaxAggregateOutputType = {
    idLot: string | null
    dateEntree: Date | null
    dateReccup: string | null
    totalAmount: number | null
    solde: number | null
    statut: string | null
    clientId: string | null
    createdAt: Date | null
  }

  export type LotCountAggregateOutputType = {
    idLot: number
    dateEntree: number
    dateReccup: number
    totalAmount: number
    solde: number
    statut: number
    clientId: number
    createdAt: number
    _all: number
  }


  export type LotAvgAggregateInputType = {
    totalAmount?: true
    solde?: true
  }

  export type LotSumAggregateInputType = {
    totalAmount?: true
    solde?: true
  }

  export type LotMinAggregateInputType = {
    idLot?: true
    dateEntree?: true
    dateReccup?: true
    totalAmount?: true
    solde?: true
    statut?: true
    clientId?: true
    createdAt?: true
  }

  export type LotMaxAggregateInputType = {
    idLot?: true
    dateEntree?: true
    dateReccup?: true
    totalAmount?: true
    solde?: true
    statut?: true
    clientId?: true
    createdAt?: true
  }

  export type LotCountAggregateInputType = {
    idLot?: true
    dateEntree?: true
    dateReccup?: true
    totalAmount?: true
    solde?: true
    statut?: true
    clientId?: true
    createdAt?: true
    _all?: true
  }

  export type LotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lot to aggregate.
     */
    where?: LotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lots to fetch.
     */
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lots
    **/
    _count?: true | LotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LotMaxAggregateInputType
  }

  export type GetLotAggregateType<T extends LotAggregateArgs> = {
        [P in keyof T & keyof AggregateLot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLot[P]>
      : GetScalarType<T[P], AggregateLot[P]>
  }




  export type LotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LotWhereInput
    orderBy?: LotOrderByWithAggregationInput | LotOrderByWithAggregationInput[]
    by: LotScalarFieldEnum[] | LotScalarFieldEnum
    having?: LotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LotCountAggregateInputType | true
    _avg?: LotAvgAggregateInputType
    _sum?: LotSumAggregateInputType
    _min?: LotMinAggregateInputType
    _max?: LotMaxAggregateInputType
  }

  export type LotGroupByOutputType = {
    idLot: string
    dateEntree: Date
    dateReccup: string
    totalAmount: number
    solde: number
    statut: string
    clientId: string
    createdAt: Date
    _count: LotCountAggregateOutputType | null
    _avg: LotAvgAggregateOutputType | null
    _sum: LotSumAggregateOutputType | null
    _min: LotMinAggregateOutputType | null
    _max: LotMaxAggregateOutputType | null
  }

  type GetLotGroupByPayload<T extends LotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LotGroupByOutputType[P]>
            : GetScalarType<T[P], LotGroupByOutputType[P]>
        }
      >
    >


  export type LotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idLot?: boolean
    dateEntree?: boolean
    dateReccup?: boolean
    totalAmount?: boolean
    solde?: boolean
    statut?: boolean
    clientId?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    vetements?: boolean | Lot$vetementsArgs<ExtArgs>
    paiements?: boolean | Lot$paiementsArgs<ExtArgs>
    _count?: boolean | LotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lot"]>

  export type LotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idLot?: boolean
    dateEntree?: boolean
    dateReccup?: boolean
    totalAmount?: boolean
    solde?: boolean
    statut?: boolean
    clientId?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lot"]>

  export type LotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idLot?: boolean
    dateEntree?: boolean
    dateReccup?: boolean
    totalAmount?: boolean
    solde?: boolean
    statut?: boolean
    clientId?: boolean
    createdAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lot"]>

  export type LotSelectScalar = {
    idLot?: boolean
    dateEntree?: boolean
    dateReccup?: boolean
    totalAmount?: boolean
    solde?: boolean
    statut?: boolean
    clientId?: boolean
    createdAt?: boolean
  }

  export type LotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idLot" | "dateEntree" | "dateReccup" | "totalAmount" | "solde" | "statut" | "clientId" | "createdAt", ExtArgs["result"]["lot"]>
  export type LotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    vetements?: boolean | Lot$vetementsArgs<ExtArgs>
    paiements?: boolean | Lot$paiementsArgs<ExtArgs>
    _count?: boolean | LotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type LotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $LotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lot"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      vetements: Prisma.$VetementPayload<ExtArgs>[]
      paiements: Prisma.$PaiementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idLot: string
      dateEntree: Date
      dateReccup: string
      totalAmount: number
      solde: number
      statut: string
      clientId: string
      createdAt: Date
    }, ExtArgs["result"]["lot"]>
    composites: {}
  }

  type LotGetPayload<S extends boolean | null | undefined | LotDefaultArgs> = $Result.GetResult<Prisma.$LotPayload, S>

  type LotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LotCountAggregateInputType | true
    }

  export interface LotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lot'], meta: { name: 'Lot' } }
    /**
     * Find zero or one Lot that matches the filter.
     * @param {LotFindUniqueArgs} args - Arguments to find a Lot
     * @example
     * // Get one Lot
     * const lot = await prisma.lot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LotFindUniqueArgs>(args: SelectSubset<T, LotFindUniqueArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LotFindUniqueOrThrowArgs} args - Arguments to find a Lot
     * @example
     * // Get one Lot
     * const lot = await prisma.lot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LotFindUniqueOrThrowArgs>(args: SelectSubset<T, LotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotFindFirstArgs} args - Arguments to find a Lot
     * @example
     * // Get one Lot
     * const lot = await prisma.lot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LotFindFirstArgs>(args?: SelectSubset<T, LotFindFirstArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotFindFirstOrThrowArgs} args - Arguments to find a Lot
     * @example
     * // Get one Lot
     * const lot = await prisma.lot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LotFindFirstOrThrowArgs>(args?: SelectSubset<T, LotFindFirstOrThrowArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lots
     * const lots = await prisma.lot.findMany()
     * 
     * // Get first 10 Lots
     * const lots = await prisma.lot.findMany({ take: 10 })
     * 
     * // Only select the `idLot`
     * const lotWithIdLotOnly = await prisma.lot.findMany({ select: { idLot: true } })
     * 
     */
    findMany<T extends LotFindManyArgs>(args?: SelectSubset<T, LotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lot.
     * @param {LotCreateArgs} args - Arguments to create a Lot.
     * @example
     * // Create one Lot
     * const Lot = await prisma.lot.create({
     *   data: {
     *     // ... data to create a Lot
     *   }
     * })
     * 
     */
    create<T extends LotCreateArgs>(args: SelectSubset<T, LotCreateArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lots.
     * @param {LotCreateManyArgs} args - Arguments to create many Lots.
     * @example
     * // Create many Lots
     * const lot = await prisma.lot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LotCreateManyArgs>(args?: SelectSubset<T, LotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lots and returns the data saved in the database.
     * @param {LotCreateManyAndReturnArgs} args - Arguments to create many Lots.
     * @example
     * // Create many Lots
     * const lot = await prisma.lot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lots and only return the `idLot`
     * const lotWithIdLotOnly = await prisma.lot.createManyAndReturn({
     *   select: { idLot: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LotCreateManyAndReturnArgs>(args?: SelectSubset<T, LotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lot.
     * @param {LotDeleteArgs} args - Arguments to delete one Lot.
     * @example
     * // Delete one Lot
     * const Lot = await prisma.lot.delete({
     *   where: {
     *     // ... filter to delete one Lot
     *   }
     * })
     * 
     */
    delete<T extends LotDeleteArgs>(args: SelectSubset<T, LotDeleteArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lot.
     * @param {LotUpdateArgs} args - Arguments to update one Lot.
     * @example
     * // Update one Lot
     * const lot = await prisma.lot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LotUpdateArgs>(args: SelectSubset<T, LotUpdateArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lots.
     * @param {LotDeleteManyArgs} args - Arguments to filter Lots to delete.
     * @example
     * // Delete a few Lots
     * const { count } = await prisma.lot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LotDeleteManyArgs>(args?: SelectSubset<T, LotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lots
     * const lot = await prisma.lot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LotUpdateManyArgs>(args: SelectSubset<T, LotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lots and returns the data updated in the database.
     * @param {LotUpdateManyAndReturnArgs} args - Arguments to update many Lots.
     * @example
     * // Update many Lots
     * const lot = await prisma.lot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lots and only return the `idLot`
     * const lotWithIdLotOnly = await prisma.lot.updateManyAndReturn({
     *   select: { idLot: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LotUpdateManyAndReturnArgs>(args: SelectSubset<T, LotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lot.
     * @param {LotUpsertArgs} args - Arguments to update or create a Lot.
     * @example
     * // Update or create a Lot
     * const lot = await prisma.lot.upsert({
     *   create: {
     *     // ... data to create a Lot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lot we want to update
     *   }
     * })
     */
    upsert<T extends LotUpsertArgs>(args: SelectSubset<T, LotUpsertArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotCountArgs} args - Arguments to filter Lots to count.
     * @example
     * // Count the number of Lots
     * const count = await prisma.lot.count({
     *   where: {
     *     // ... the filter for the Lots we want to count
     *   }
     * })
    **/
    count<T extends LotCountArgs>(
      args?: Subset<T, LotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LotAggregateArgs>(args: Subset<T, LotAggregateArgs>): Prisma.PrismaPromise<GetLotAggregateType<T>>

    /**
     * Group by Lot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LotGroupByArgs['orderBy'] }
        : { orderBy?: LotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lot model
   */
  readonly fields: LotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vetements<T extends Lot$vetementsArgs<ExtArgs> = {}>(args?: Subset<T, Lot$vetementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VetementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paiements<T extends Lot$paiementsArgs<ExtArgs> = {}>(args?: Subset<T, Lot$paiementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lot model
   */
  interface LotFieldRefs {
    readonly idLot: FieldRef<"Lot", 'String'>
    readonly dateEntree: FieldRef<"Lot", 'DateTime'>
    readonly dateReccup: FieldRef<"Lot", 'String'>
    readonly totalAmount: FieldRef<"Lot", 'Float'>
    readonly solde: FieldRef<"Lot", 'Float'>
    readonly statut: FieldRef<"Lot", 'String'>
    readonly clientId: FieldRef<"Lot", 'String'>
    readonly createdAt: FieldRef<"Lot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lot findUnique
   */
  export type LotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lot to fetch.
     */
    where: LotWhereUniqueInput
  }

  /**
   * Lot findUniqueOrThrow
   */
  export type LotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lot to fetch.
     */
    where: LotWhereUniqueInput
  }

  /**
   * Lot findFirst
   */
  export type LotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lot to fetch.
     */
    where?: LotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lots to fetch.
     */
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lots.
     */
    cursor?: LotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lots.
     */
    distinct?: LotScalarFieldEnum | LotScalarFieldEnum[]
  }

  /**
   * Lot findFirstOrThrow
   */
  export type LotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lot to fetch.
     */
    where?: LotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lots to fetch.
     */
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lots.
     */
    cursor?: LotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lots.
     */
    distinct?: LotScalarFieldEnum | LotScalarFieldEnum[]
  }

  /**
   * Lot findMany
   */
  export type LotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lots to fetch.
     */
    where?: LotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lots to fetch.
     */
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lots.
     */
    cursor?: LotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lots.
     */
    skip?: number
    distinct?: LotScalarFieldEnum | LotScalarFieldEnum[]
  }

  /**
   * Lot create
   */
  export type LotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * The data needed to create a Lot.
     */
    data: XOR<LotCreateInput, LotUncheckedCreateInput>
  }

  /**
   * Lot createMany
   */
  export type LotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lots.
     */
    data: LotCreateManyInput | LotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lot createManyAndReturn
   */
  export type LotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * The data used to create many Lots.
     */
    data: LotCreateManyInput | LotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lot update
   */
  export type LotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * The data needed to update a Lot.
     */
    data: XOR<LotUpdateInput, LotUncheckedUpdateInput>
    /**
     * Choose, which Lot to update.
     */
    where: LotWhereUniqueInput
  }

  /**
   * Lot updateMany
   */
  export type LotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lots.
     */
    data: XOR<LotUpdateManyMutationInput, LotUncheckedUpdateManyInput>
    /**
     * Filter which Lots to update
     */
    where?: LotWhereInput
    /**
     * Limit how many Lots to update.
     */
    limit?: number
  }

  /**
   * Lot updateManyAndReturn
   */
  export type LotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * The data used to update Lots.
     */
    data: XOR<LotUpdateManyMutationInput, LotUncheckedUpdateManyInput>
    /**
     * Filter which Lots to update
     */
    where?: LotWhereInput
    /**
     * Limit how many Lots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lot upsert
   */
  export type LotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * The filter to search for the Lot to update in case it exists.
     */
    where: LotWhereUniqueInput
    /**
     * In case the Lot found by the `where` argument doesn't exist, create a new Lot with this data.
     */
    create: XOR<LotCreateInput, LotUncheckedCreateInput>
    /**
     * In case the Lot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LotUpdateInput, LotUncheckedUpdateInput>
  }

  /**
   * Lot delete
   */
  export type LotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter which Lot to delete.
     */
    where: LotWhereUniqueInput
  }

  /**
   * Lot deleteMany
   */
  export type LotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lots to delete
     */
    where?: LotWhereInput
    /**
     * Limit how many Lots to delete.
     */
    limit?: number
  }

  /**
   * Lot.vetements
   */
  export type Lot$vetementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vetement
     */
    select?: VetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vetement
     */
    omit?: VetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetementInclude<ExtArgs> | null
    where?: VetementWhereInput
    orderBy?: VetementOrderByWithRelationInput | VetementOrderByWithRelationInput[]
    cursor?: VetementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VetementScalarFieldEnum | VetementScalarFieldEnum[]
  }

  /**
   * Lot.paiements
   */
  export type Lot$paiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    cursor?: PaiementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Lot without action
   */
  export type LotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
  }


  /**
   * Model Vetement
   */

  export type AggregateVetement = {
    _count: VetementCountAggregateOutputType | null
    _min: VetementMinAggregateOutputType | null
    _max: VetementMaxAggregateOutputType | null
  }

  export type VetementMinAggregateOutputType = {
    idVetement: string | null
    description: string | null
    lotId: string | null
    typeId: string | null
  }

  export type VetementMaxAggregateOutputType = {
    idVetement: string | null
    description: string | null
    lotId: string | null
    typeId: string | null
  }

  export type VetementCountAggregateOutputType = {
    idVetement: number
    description: number
    lotId: number
    typeId: number
    _all: number
  }


  export type VetementMinAggregateInputType = {
    idVetement?: true
    description?: true
    lotId?: true
    typeId?: true
  }

  export type VetementMaxAggregateInputType = {
    idVetement?: true
    description?: true
    lotId?: true
    typeId?: true
  }

  export type VetementCountAggregateInputType = {
    idVetement?: true
    description?: true
    lotId?: true
    typeId?: true
    _all?: true
  }

  export type VetementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vetement to aggregate.
     */
    where?: VetementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vetements to fetch.
     */
    orderBy?: VetementOrderByWithRelationInput | VetementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VetementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vetements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vetements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vetements
    **/
    _count?: true | VetementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VetementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VetementMaxAggregateInputType
  }

  export type GetVetementAggregateType<T extends VetementAggregateArgs> = {
        [P in keyof T & keyof AggregateVetement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVetement[P]>
      : GetScalarType<T[P], AggregateVetement[P]>
  }




  export type VetementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VetementWhereInput
    orderBy?: VetementOrderByWithAggregationInput | VetementOrderByWithAggregationInput[]
    by: VetementScalarFieldEnum[] | VetementScalarFieldEnum
    having?: VetementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VetementCountAggregateInputType | true
    _min?: VetementMinAggregateInputType
    _max?: VetementMaxAggregateInputType
  }

  export type VetementGroupByOutputType = {
    idVetement: string
    description: string
    lotId: string
    typeId: string
    _count: VetementCountAggregateOutputType | null
    _min: VetementMinAggregateOutputType | null
    _max: VetementMaxAggregateOutputType | null
  }

  type GetVetementGroupByPayload<T extends VetementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VetementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VetementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VetementGroupByOutputType[P]>
            : GetScalarType<T[P], VetementGroupByOutputType[P]>
        }
      >
    >


  export type VetementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idVetement?: boolean
    description?: boolean
    lotId?: boolean
    typeId?: boolean
    lot?: boolean | LotDefaultArgs<ExtArgs>
    type?: boolean | TypeVetementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vetement"]>

  export type VetementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idVetement?: boolean
    description?: boolean
    lotId?: boolean
    typeId?: boolean
    lot?: boolean | LotDefaultArgs<ExtArgs>
    type?: boolean | TypeVetementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vetement"]>

  export type VetementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idVetement?: boolean
    description?: boolean
    lotId?: boolean
    typeId?: boolean
    lot?: boolean | LotDefaultArgs<ExtArgs>
    type?: boolean | TypeVetementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vetement"]>

  export type VetementSelectScalar = {
    idVetement?: boolean
    description?: boolean
    lotId?: boolean
    typeId?: boolean
  }

  export type VetementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idVetement" | "description" | "lotId" | "typeId", ExtArgs["result"]["vetement"]>
  export type VetementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | LotDefaultArgs<ExtArgs>
    type?: boolean | TypeVetementDefaultArgs<ExtArgs>
  }
  export type VetementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | LotDefaultArgs<ExtArgs>
    type?: boolean | TypeVetementDefaultArgs<ExtArgs>
  }
  export type VetementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | LotDefaultArgs<ExtArgs>
    type?: boolean | TypeVetementDefaultArgs<ExtArgs>
  }

  export type $VetementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vetement"
    objects: {
      lot: Prisma.$LotPayload<ExtArgs>
      type: Prisma.$TypeVetementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idVetement: string
      description: string
      lotId: string
      typeId: string
    }, ExtArgs["result"]["vetement"]>
    composites: {}
  }

  type VetementGetPayload<S extends boolean | null | undefined | VetementDefaultArgs> = $Result.GetResult<Prisma.$VetementPayload, S>

  type VetementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VetementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VetementCountAggregateInputType | true
    }

  export interface VetementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vetement'], meta: { name: 'Vetement' } }
    /**
     * Find zero or one Vetement that matches the filter.
     * @param {VetementFindUniqueArgs} args - Arguments to find a Vetement
     * @example
     * // Get one Vetement
     * const vetement = await prisma.vetement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VetementFindUniqueArgs>(args: SelectSubset<T, VetementFindUniqueArgs<ExtArgs>>): Prisma__VetementClient<$Result.GetResult<Prisma.$VetementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vetement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VetementFindUniqueOrThrowArgs} args - Arguments to find a Vetement
     * @example
     * // Get one Vetement
     * const vetement = await prisma.vetement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VetementFindUniqueOrThrowArgs>(args: SelectSubset<T, VetementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VetementClient<$Result.GetResult<Prisma.$VetementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vetement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetementFindFirstArgs} args - Arguments to find a Vetement
     * @example
     * // Get one Vetement
     * const vetement = await prisma.vetement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VetementFindFirstArgs>(args?: SelectSubset<T, VetementFindFirstArgs<ExtArgs>>): Prisma__VetementClient<$Result.GetResult<Prisma.$VetementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vetement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetementFindFirstOrThrowArgs} args - Arguments to find a Vetement
     * @example
     * // Get one Vetement
     * const vetement = await prisma.vetement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VetementFindFirstOrThrowArgs>(args?: SelectSubset<T, VetementFindFirstOrThrowArgs<ExtArgs>>): Prisma__VetementClient<$Result.GetResult<Prisma.$VetementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vetements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vetements
     * const vetements = await prisma.vetement.findMany()
     * 
     * // Get first 10 Vetements
     * const vetements = await prisma.vetement.findMany({ take: 10 })
     * 
     * // Only select the `idVetement`
     * const vetementWithIdVetementOnly = await prisma.vetement.findMany({ select: { idVetement: true } })
     * 
     */
    findMany<T extends VetementFindManyArgs>(args?: SelectSubset<T, VetementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VetementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vetement.
     * @param {VetementCreateArgs} args - Arguments to create a Vetement.
     * @example
     * // Create one Vetement
     * const Vetement = await prisma.vetement.create({
     *   data: {
     *     // ... data to create a Vetement
     *   }
     * })
     * 
     */
    create<T extends VetementCreateArgs>(args: SelectSubset<T, VetementCreateArgs<ExtArgs>>): Prisma__VetementClient<$Result.GetResult<Prisma.$VetementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vetements.
     * @param {VetementCreateManyArgs} args - Arguments to create many Vetements.
     * @example
     * // Create many Vetements
     * const vetement = await prisma.vetement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VetementCreateManyArgs>(args?: SelectSubset<T, VetementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vetements and returns the data saved in the database.
     * @param {VetementCreateManyAndReturnArgs} args - Arguments to create many Vetements.
     * @example
     * // Create many Vetements
     * const vetement = await prisma.vetement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vetements and only return the `idVetement`
     * const vetementWithIdVetementOnly = await prisma.vetement.createManyAndReturn({
     *   select: { idVetement: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VetementCreateManyAndReturnArgs>(args?: SelectSubset<T, VetementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VetementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vetement.
     * @param {VetementDeleteArgs} args - Arguments to delete one Vetement.
     * @example
     * // Delete one Vetement
     * const Vetement = await prisma.vetement.delete({
     *   where: {
     *     // ... filter to delete one Vetement
     *   }
     * })
     * 
     */
    delete<T extends VetementDeleteArgs>(args: SelectSubset<T, VetementDeleteArgs<ExtArgs>>): Prisma__VetementClient<$Result.GetResult<Prisma.$VetementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vetement.
     * @param {VetementUpdateArgs} args - Arguments to update one Vetement.
     * @example
     * // Update one Vetement
     * const vetement = await prisma.vetement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VetementUpdateArgs>(args: SelectSubset<T, VetementUpdateArgs<ExtArgs>>): Prisma__VetementClient<$Result.GetResult<Prisma.$VetementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vetements.
     * @param {VetementDeleteManyArgs} args - Arguments to filter Vetements to delete.
     * @example
     * // Delete a few Vetements
     * const { count } = await prisma.vetement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VetementDeleteManyArgs>(args?: SelectSubset<T, VetementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vetements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vetements
     * const vetement = await prisma.vetement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VetementUpdateManyArgs>(args: SelectSubset<T, VetementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vetements and returns the data updated in the database.
     * @param {VetementUpdateManyAndReturnArgs} args - Arguments to update many Vetements.
     * @example
     * // Update many Vetements
     * const vetement = await prisma.vetement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vetements and only return the `idVetement`
     * const vetementWithIdVetementOnly = await prisma.vetement.updateManyAndReturn({
     *   select: { idVetement: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VetementUpdateManyAndReturnArgs>(args: SelectSubset<T, VetementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VetementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vetement.
     * @param {VetementUpsertArgs} args - Arguments to update or create a Vetement.
     * @example
     * // Update or create a Vetement
     * const vetement = await prisma.vetement.upsert({
     *   create: {
     *     // ... data to create a Vetement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vetement we want to update
     *   }
     * })
     */
    upsert<T extends VetementUpsertArgs>(args: SelectSubset<T, VetementUpsertArgs<ExtArgs>>): Prisma__VetementClient<$Result.GetResult<Prisma.$VetementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vetements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetementCountArgs} args - Arguments to filter Vetements to count.
     * @example
     * // Count the number of Vetements
     * const count = await prisma.vetement.count({
     *   where: {
     *     // ... the filter for the Vetements we want to count
     *   }
     * })
    **/
    count<T extends VetementCountArgs>(
      args?: Subset<T, VetementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VetementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vetement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VetementAggregateArgs>(args: Subset<T, VetementAggregateArgs>): Prisma.PrismaPromise<GetVetementAggregateType<T>>

    /**
     * Group by Vetement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VetementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VetementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VetementGroupByArgs['orderBy'] }
        : { orderBy?: VetementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VetementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVetementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vetement model
   */
  readonly fields: VetementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vetement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VetementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lot<T extends LotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LotDefaultArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    type<T extends TypeVetementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeVetementDefaultArgs<ExtArgs>>): Prisma__TypeVetementClient<$Result.GetResult<Prisma.$TypeVetementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vetement model
   */
  interface VetementFieldRefs {
    readonly idVetement: FieldRef<"Vetement", 'String'>
    readonly description: FieldRef<"Vetement", 'String'>
    readonly lotId: FieldRef<"Vetement", 'String'>
    readonly typeId: FieldRef<"Vetement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vetement findUnique
   */
  export type VetementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vetement
     */
    select?: VetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vetement
     */
    omit?: VetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetementInclude<ExtArgs> | null
    /**
     * Filter, which Vetement to fetch.
     */
    where: VetementWhereUniqueInput
  }

  /**
   * Vetement findUniqueOrThrow
   */
  export type VetementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vetement
     */
    select?: VetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vetement
     */
    omit?: VetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetementInclude<ExtArgs> | null
    /**
     * Filter, which Vetement to fetch.
     */
    where: VetementWhereUniqueInput
  }

  /**
   * Vetement findFirst
   */
  export type VetementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vetement
     */
    select?: VetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vetement
     */
    omit?: VetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetementInclude<ExtArgs> | null
    /**
     * Filter, which Vetement to fetch.
     */
    where?: VetementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vetements to fetch.
     */
    orderBy?: VetementOrderByWithRelationInput | VetementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vetements.
     */
    cursor?: VetementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vetements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vetements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vetements.
     */
    distinct?: VetementScalarFieldEnum | VetementScalarFieldEnum[]
  }

  /**
   * Vetement findFirstOrThrow
   */
  export type VetementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vetement
     */
    select?: VetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vetement
     */
    omit?: VetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetementInclude<ExtArgs> | null
    /**
     * Filter, which Vetement to fetch.
     */
    where?: VetementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vetements to fetch.
     */
    orderBy?: VetementOrderByWithRelationInput | VetementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vetements.
     */
    cursor?: VetementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vetements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vetements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vetements.
     */
    distinct?: VetementScalarFieldEnum | VetementScalarFieldEnum[]
  }

  /**
   * Vetement findMany
   */
  export type VetementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vetement
     */
    select?: VetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vetement
     */
    omit?: VetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetementInclude<ExtArgs> | null
    /**
     * Filter, which Vetements to fetch.
     */
    where?: VetementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vetements to fetch.
     */
    orderBy?: VetementOrderByWithRelationInput | VetementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vetements.
     */
    cursor?: VetementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vetements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vetements.
     */
    skip?: number
    distinct?: VetementScalarFieldEnum | VetementScalarFieldEnum[]
  }

  /**
   * Vetement create
   */
  export type VetementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vetement
     */
    select?: VetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vetement
     */
    omit?: VetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetementInclude<ExtArgs> | null
    /**
     * The data needed to create a Vetement.
     */
    data: XOR<VetementCreateInput, VetementUncheckedCreateInput>
  }

  /**
   * Vetement createMany
   */
  export type VetementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vetements.
     */
    data: VetementCreateManyInput | VetementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vetement createManyAndReturn
   */
  export type VetementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vetement
     */
    select?: VetementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vetement
     */
    omit?: VetementOmit<ExtArgs> | null
    /**
     * The data used to create many Vetements.
     */
    data: VetementCreateManyInput | VetementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vetement update
   */
  export type VetementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vetement
     */
    select?: VetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vetement
     */
    omit?: VetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetementInclude<ExtArgs> | null
    /**
     * The data needed to update a Vetement.
     */
    data: XOR<VetementUpdateInput, VetementUncheckedUpdateInput>
    /**
     * Choose, which Vetement to update.
     */
    where: VetementWhereUniqueInput
  }

  /**
   * Vetement updateMany
   */
  export type VetementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vetements.
     */
    data: XOR<VetementUpdateManyMutationInput, VetementUncheckedUpdateManyInput>
    /**
     * Filter which Vetements to update
     */
    where?: VetementWhereInput
    /**
     * Limit how many Vetements to update.
     */
    limit?: number
  }

  /**
   * Vetement updateManyAndReturn
   */
  export type VetementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vetement
     */
    select?: VetementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vetement
     */
    omit?: VetementOmit<ExtArgs> | null
    /**
     * The data used to update Vetements.
     */
    data: XOR<VetementUpdateManyMutationInput, VetementUncheckedUpdateManyInput>
    /**
     * Filter which Vetements to update
     */
    where?: VetementWhereInput
    /**
     * Limit how many Vetements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vetement upsert
   */
  export type VetementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vetement
     */
    select?: VetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vetement
     */
    omit?: VetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetementInclude<ExtArgs> | null
    /**
     * The filter to search for the Vetement to update in case it exists.
     */
    where: VetementWhereUniqueInput
    /**
     * In case the Vetement found by the `where` argument doesn't exist, create a new Vetement with this data.
     */
    create: XOR<VetementCreateInput, VetementUncheckedCreateInput>
    /**
     * In case the Vetement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VetementUpdateInput, VetementUncheckedUpdateInput>
  }

  /**
   * Vetement delete
   */
  export type VetementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vetement
     */
    select?: VetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vetement
     */
    omit?: VetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetementInclude<ExtArgs> | null
    /**
     * Filter which Vetement to delete.
     */
    where: VetementWhereUniqueInput
  }

  /**
   * Vetement deleteMany
   */
  export type VetementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vetements to delete
     */
    where?: VetementWhereInput
    /**
     * Limit how many Vetements to delete.
     */
    limit?: number
  }

  /**
   * Vetement without action
   */
  export type VetementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vetement
     */
    select?: VetementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vetement
     */
    omit?: VetementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VetementInclude<ExtArgs> | null
  }


  /**
   * Model Paiement
   */

  export type AggregatePaiement = {
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  export type PaiementAvgAggregateOutputType = {
    montant: number | null
  }

  export type PaiementSumAggregateOutputType = {
    montant: number | null
  }

  export type PaiementMinAggregateOutputType = {
    idPaiement: string | null
    montant: number | null
    date: string | null
    lotId: string | null
    createdAt: Date | null
  }

  export type PaiementMaxAggregateOutputType = {
    idPaiement: string | null
    montant: number | null
    date: string | null
    lotId: string | null
    createdAt: Date | null
  }

  export type PaiementCountAggregateOutputType = {
    idPaiement: number
    montant: number
    date: number
    lotId: number
    createdAt: number
    _all: number
  }


  export type PaiementAvgAggregateInputType = {
    montant?: true
  }

  export type PaiementSumAggregateInputType = {
    montant?: true
  }

  export type PaiementMinAggregateInputType = {
    idPaiement?: true
    montant?: true
    date?: true
    lotId?: true
    createdAt?: true
  }

  export type PaiementMaxAggregateInputType = {
    idPaiement?: true
    montant?: true
    date?: true
    lotId?: true
    createdAt?: true
  }

  export type PaiementCountAggregateInputType = {
    idPaiement?: true
    montant?: true
    date?: true
    lotId?: true
    createdAt?: true
    _all?: true
  }

  export type PaiementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiement to aggregate.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paiements
    **/
    _count?: true | PaiementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaiementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaiementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaiementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaiementMaxAggregateInputType
  }

  export type GetPaiementAggregateType<T extends PaiementAggregateArgs> = {
        [P in keyof T & keyof AggregatePaiement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaiement[P]>
      : GetScalarType<T[P], AggregatePaiement[P]>
  }




  export type PaiementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithAggregationInput | PaiementOrderByWithAggregationInput[]
    by: PaiementScalarFieldEnum[] | PaiementScalarFieldEnum
    having?: PaiementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaiementCountAggregateInputType | true
    _avg?: PaiementAvgAggregateInputType
    _sum?: PaiementSumAggregateInputType
    _min?: PaiementMinAggregateInputType
    _max?: PaiementMaxAggregateInputType
  }

  export type PaiementGroupByOutputType = {
    idPaiement: string
    montant: number
    date: string
    lotId: string
    createdAt: Date
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  type GetPaiementGroupByPayload<T extends PaiementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaiementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaiementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaiementGroupByOutputType[P]>
            : GetScalarType<T[P], PaiementGroupByOutputType[P]>
        }
      >
    >


  export type PaiementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPaiement?: boolean
    montant?: boolean
    date?: boolean
    lotId?: boolean
    createdAt?: boolean
    lot?: boolean | LotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paiement"]>

  export type PaiementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPaiement?: boolean
    montant?: boolean
    date?: boolean
    lotId?: boolean
    createdAt?: boolean
    lot?: boolean | LotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paiement"]>

  export type PaiementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPaiement?: boolean
    montant?: boolean
    date?: boolean
    lotId?: boolean
    createdAt?: boolean
    lot?: boolean | LotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paiement"]>

  export type PaiementSelectScalar = {
    idPaiement?: boolean
    montant?: boolean
    date?: boolean
    lotId?: boolean
    createdAt?: boolean
  }

  export type PaiementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPaiement" | "montant" | "date" | "lotId" | "createdAt", ExtArgs["result"]["paiement"]>
  export type PaiementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | LotDefaultArgs<ExtArgs>
  }
  export type PaiementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | LotDefaultArgs<ExtArgs>
  }
  export type PaiementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | LotDefaultArgs<ExtArgs>
  }

  export type $PaiementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paiement"
    objects: {
      lot: Prisma.$LotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idPaiement: string
      montant: number
      date: string
      lotId: string
      createdAt: Date
    }, ExtArgs["result"]["paiement"]>
    composites: {}
  }

  type PaiementGetPayload<S extends boolean | null | undefined | PaiementDefaultArgs> = $Result.GetResult<Prisma.$PaiementPayload, S>

  type PaiementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaiementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaiementCountAggregateInputType | true
    }

  export interface PaiementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paiement'], meta: { name: 'Paiement' } }
    /**
     * Find zero or one Paiement that matches the filter.
     * @param {PaiementFindUniqueArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaiementFindUniqueArgs>(args: SelectSubset<T, PaiementFindUniqueArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paiement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaiementFindUniqueOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaiementFindUniqueOrThrowArgs>(args: SelectSubset<T, PaiementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaiementFindFirstArgs>(args?: SelectSubset<T, PaiementFindFirstArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaiementFindFirstOrThrowArgs>(args?: SelectSubset<T, PaiementFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paiements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paiements
     * const paiements = await prisma.paiement.findMany()
     * 
     * // Get first 10 Paiements
     * const paiements = await prisma.paiement.findMany({ take: 10 })
     * 
     * // Only select the `idPaiement`
     * const paiementWithIdPaiementOnly = await prisma.paiement.findMany({ select: { idPaiement: true } })
     * 
     */
    findMany<T extends PaiementFindManyArgs>(args?: SelectSubset<T, PaiementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paiement.
     * @param {PaiementCreateArgs} args - Arguments to create a Paiement.
     * @example
     * // Create one Paiement
     * const Paiement = await prisma.paiement.create({
     *   data: {
     *     // ... data to create a Paiement
     *   }
     * })
     * 
     */
    create<T extends PaiementCreateArgs>(args: SelectSubset<T, PaiementCreateArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paiements.
     * @param {PaiementCreateManyArgs} args - Arguments to create many Paiements.
     * @example
     * // Create many Paiements
     * const paiement = await prisma.paiement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaiementCreateManyArgs>(args?: SelectSubset<T, PaiementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Paiements and returns the data saved in the database.
     * @param {PaiementCreateManyAndReturnArgs} args - Arguments to create many Paiements.
     * @example
     * // Create many Paiements
     * const paiement = await prisma.paiement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Paiements and only return the `idPaiement`
     * const paiementWithIdPaiementOnly = await prisma.paiement.createManyAndReturn({
     *   select: { idPaiement: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaiementCreateManyAndReturnArgs>(args?: SelectSubset<T, PaiementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paiement.
     * @param {PaiementDeleteArgs} args - Arguments to delete one Paiement.
     * @example
     * // Delete one Paiement
     * const Paiement = await prisma.paiement.delete({
     *   where: {
     *     // ... filter to delete one Paiement
     *   }
     * })
     * 
     */
    delete<T extends PaiementDeleteArgs>(args: SelectSubset<T, PaiementDeleteArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paiement.
     * @param {PaiementUpdateArgs} args - Arguments to update one Paiement.
     * @example
     * // Update one Paiement
     * const paiement = await prisma.paiement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaiementUpdateArgs>(args: SelectSubset<T, PaiementUpdateArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paiements.
     * @param {PaiementDeleteManyArgs} args - Arguments to filter Paiements to delete.
     * @example
     * // Delete a few Paiements
     * const { count } = await prisma.paiement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaiementDeleteManyArgs>(args?: SelectSubset<T, PaiementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paiements
     * const paiement = await prisma.paiement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaiementUpdateManyArgs>(args: SelectSubset<T, PaiementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paiements and returns the data updated in the database.
     * @param {PaiementUpdateManyAndReturnArgs} args - Arguments to update many Paiements.
     * @example
     * // Update many Paiements
     * const paiement = await prisma.paiement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Paiements and only return the `idPaiement`
     * const paiementWithIdPaiementOnly = await prisma.paiement.updateManyAndReturn({
     *   select: { idPaiement: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaiementUpdateManyAndReturnArgs>(args: SelectSubset<T, PaiementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paiement.
     * @param {PaiementUpsertArgs} args - Arguments to update or create a Paiement.
     * @example
     * // Update or create a Paiement
     * const paiement = await prisma.paiement.upsert({
     *   create: {
     *     // ... data to create a Paiement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paiement we want to update
     *   }
     * })
     */
    upsert<T extends PaiementUpsertArgs>(args: SelectSubset<T, PaiementUpsertArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementCountArgs} args - Arguments to filter Paiements to count.
     * @example
     * // Count the number of Paiements
     * const count = await prisma.paiement.count({
     *   where: {
     *     // ... the filter for the Paiements we want to count
     *   }
     * })
    **/
    count<T extends PaiementCountArgs>(
      args?: Subset<T, PaiementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaiementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaiementAggregateArgs>(args: Subset<T, PaiementAggregateArgs>): Prisma.PrismaPromise<GetPaiementAggregateType<T>>

    /**
     * Group by Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaiementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaiementGroupByArgs['orderBy'] }
        : { orderBy?: PaiementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaiementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaiementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paiement model
   */
  readonly fields: PaiementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paiement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaiementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lot<T extends LotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LotDefaultArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Paiement model
   */
  interface PaiementFieldRefs {
    readonly idPaiement: FieldRef<"Paiement", 'String'>
    readonly montant: FieldRef<"Paiement", 'Float'>
    readonly date: FieldRef<"Paiement", 'String'>
    readonly lotId: FieldRef<"Paiement", 'String'>
    readonly createdAt: FieldRef<"Paiement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Paiement findUnique
   */
  export type PaiementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement findUniqueOrThrow
   */
  export type PaiementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement findFirst
   */
  export type PaiementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement findFirstOrThrow
   */
  export type PaiementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement findMany
   */
  export type PaiementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiements to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement create
   */
  export type PaiementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to create a Paiement.
     */
    data: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
  }

  /**
   * Paiement createMany
   */
  export type PaiementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paiements.
     */
    data: PaiementCreateManyInput | PaiementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paiement createManyAndReturn
   */
  export type PaiementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * The data used to create many Paiements.
     */
    data: PaiementCreateManyInput | PaiementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paiement update
   */
  export type PaiementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to update a Paiement.
     */
    data: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
    /**
     * Choose, which Paiement to update.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement updateMany
   */
  export type PaiementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paiements.
     */
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyInput>
    /**
     * Filter which Paiements to update
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to update.
     */
    limit?: number
  }

  /**
   * Paiement updateManyAndReturn
   */
  export type PaiementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * The data used to update Paiements.
     */
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyInput>
    /**
     * Filter which Paiements to update
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paiement upsert
   */
  export type PaiementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The filter to search for the Paiement to update in case it exists.
     */
    where: PaiementWhereUniqueInput
    /**
     * In case the Paiement found by the `where` argument doesn't exist, create a new Paiement with this data.
     */
    create: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
    /**
     * In case the Paiement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
  }

  /**
   * Paiement delete
   */
  export type PaiementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter which Paiement to delete.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement deleteMany
   */
  export type PaiementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiements to delete
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to delete.
     */
    limit?: number
  }

  /**
   * Paiement without action
   */
  export type PaiementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    idUser: 'idUser',
    nom: 'nom',
    clerkId: 'clerkId',
    email: 'email',
    role: 'role',
    telephone: 'telephone',
    profilePicture: 'profilePicture',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    idClient: 'idClient',
    nom: 'nom',
    telephone: 'telephone',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const TypeVetementScalarFieldEnum: {
    idType: 'idType',
    nom: 'nom',
    prix: 'prix'
  };

  export type TypeVetementScalarFieldEnum = (typeof TypeVetementScalarFieldEnum)[keyof typeof TypeVetementScalarFieldEnum]


  export const LotScalarFieldEnum: {
    idLot: 'idLot',
    dateEntree: 'dateEntree',
    dateReccup: 'dateReccup',
    totalAmount: 'totalAmount',
    solde: 'solde',
    statut: 'statut',
    clientId: 'clientId',
    createdAt: 'createdAt'
  };

  export type LotScalarFieldEnum = (typeof LotScalarFieldEnum)[keyof typeof LotScalarFieldEnum]


  export const VetementScalarFieldEnum: {
    idVetement: 'idVetement',
    description: 'description',
    lotId: 'lotId',
    typeId: 'typeId'
  };

  export type VetementScalarFieldEnum = (typeof VetementScalarFieldEnum)[keyof typeof VetementScalarFieldEnum]


  export const PaiementScalarFieldEnum: {
    idPaiement: 'idPaiement',
    montant: 'montant',
    date: 'date',
    lotId: 'lotId',
    createdAt: 'createdAt'
  };

  export type PaiementScalarFieldEnum = (typeof PaiementScalarFieldEnum)[keyof typeof PaiementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    idUser?: StringFilter<"User"> | string
    nom?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    telephone?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clients?: ClientListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    idUser?: SortOrder
    nom?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    telephone?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clients?: ClientOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    idUser?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nom?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    telephone?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clients?: ClientListRelationFilter
  }, "idUser" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    idUser?: SortOrder
    nom?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    telephone?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    idUser?: StringWithAggregatesFilter<"User"> | string
    nom?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    telephone?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    idClient?: StringFilter<"Client"> | string
    nom?: StringFilter<"Client"> | string
    telephone?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    userId?: StringFilter<"Client"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lots?: LotListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    idClient?: SortOrder
    nom?: SortOrder
    telephone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    lots?: LotOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    idClient?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    nom?: StringFilter<"Client"> | string
    telephone?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    userId?: StringFilter<"Client"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lots?: LotListRelationFilter
  }, "idClient">

  export type ClientOrderByWithAggregationInput = {
    idClient?: SortOrder
    nom?: SortOrder
    telephone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    idClient?: StringWithAggregatesFilter<"Client"> | string
    nom?: StringWithAggregatesFilter<"Client"> | string
    telephone?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    userId?: StringWithAggregatesFilter<"Client"> | string
  }

  export type TypeVetementWhereInput = {
    AND?: TypeVetementWhereInput | TypeVetementWhereInput[]
    OR?: TypeVetementWhereInput[]
    NOT?: TypeVetementWhereInput | TypeVetementWhereInput[]
    idType?: StringFilter<"TypeVetement"> | string
    nom?: StringFilter<"TypeVetement"> | string
    prix?: FloatFilter<"TypeVetement"> | number
    vetements?: VetementListRelationFilter
  }

  export type TypeVetementOrderByWithRelationInput = {
    idType?: SortOrder
    nom?: SortOrder
    prix?: SortOrder
    vetements?: VetementOrderByRelationAggregateInput
  }

  export type TypeVetementWhereUniqueInput = Prisma.AtLeast<{
    idType?: string
    AND?: TypeVetementWhereInput | TypeVetementWhereInput[]
    OR?: TypeVetementWhereInput[]
    NOT?: TypeVetementWhereInput | TypeVetementWhereInput[]
    nom?: StringFilter<"TypeVetement"> | string
    prix?: FloatFilter<"TypeVetement"> | number
    vetements?: VetementListRelationFilter
  }, "idType">

  export type TypeVetementOrderByWithAggregationInput = {
    idType?: SortOrder
    nom?: SortOrder
    prix?: SortOrder
    _count?: TypeVetementCountOrderByAggregateInput
    _avg?: TypeVetementAvgOrderByAggregateInput
    _max?: TypeVetementMaxOrderByAggregateInput
    _min?: TypeVetementMinOrderByAggregateInput
    _sum?: TypeVetementSumOrderByAggregateInput
  }

  export type TypeVetementScalarWhereWithAggregatesInput = {
    AND?: TypeVetementScalarWhereWithAggregatesInput | TypeVetementScalarWhereWithAggregatesInput[]
    OR?: TypeVetementScalarWhereWithAggregatesInput[]
    NOT?: TypeVetementScalarWhereWithAggregatesInput | TypeVetementScalarWhereWithAggregatesInput[]
    idType?: StringWithAggregatesFilter<"TypeVetement"> | string
    nom?: StringWithAggregatesFilter<"TypeVetement"> | string
    prix?: FloatWithAggregatesFilter<"TypeVetement"> | number
  }

  export type LotWhereInput = {
    AND?: LotWhereInput | LotWhereInput[]
    OR?: LotWhereInput[]
    NOT?: LotWhereInput | LotWhereInput[]
    idLot?: StringFilter<"Lot"> | string
    dateEntree?: DateTimeFilter<"Lot"> | Date | string
    dateReccup?: StringFilter<"Lot"> | string
    totalAmount?: FloatFilter<"Lot"> | number
    solde?: FloatFilter<"Lot"> | number
    statut?: StringFilter<"Lot"> | string
    clientId?: StringFilter<"Lot"> | string
    createdAt?: DateTimeFilter<"Lot"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    vetements?: VetementListRelationFilter
    paiements?: PaiementListRelationFilter
  }

  export type LotOrderByWithRelationInput = {
    idLot?: SortOrder
    dateEntree?: SortOrder
    dateReccup?: SortOrder
    totalAmount?: SortOrder
    solde?: SortOrder
    statut?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    vetements?: VetementOrderByRelationAggregateInput
    paiements?: PaiementOrderByRelationAggregateInput
  }

  export type LotWhereUniqueInput = Prisma.AtLeast<{
    idLot?: string
    AND?: LotWhereInput | LotWhereInput[]
    OR?: LotWhereInput[]
    NOT?: LotWhereInput | LotWhereInput[]
    dateEntree?: DateTimeFilter<"Lot"> | Date | string
    dateReccup?: StringFilter<"Lot"> | string
    totalAmount?: FloatFilter<"Lot"> | number
    solde?: FloatFilter<"Lot"> | number
    statut?: StringFilter<"Lot"> | string
    clientId?: StringFilter<"Lot"> | string
    createdAt?: DateTimeFilter<"Lot"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    vetements?: VetementListRelationFilter
    paiements?: PaiementListRelationFilter
  }, "idLot">

  export type LotOrderByWithAggregationInput = {
    idLot?: SortOrder
    dateEntree?: SortOrder
    dateReccup?: SortOrder
    totalAmount?: SortOrder
    solde?: SortOrder
    statut?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    _count?: LotCountOrderByAggregateInput
    _avg?: LotAvgOrderByAggregateInput
    _max?: LotMaxOrderByAggregateInput
    _min?: LotMinOrderByAggregateInput
    _sum?: LotSumOrderByAggregateInput
  }

  export type LotScalarWhereWithAggregatesInput = {
    AND?: LotScalarWhereWithAggregatesInput | LotScalarWhereWithAggregatesInput[]
    OR?: LotScalarWhereWithAggregatesInput[]
    NOT?: LotScalarWhereWithAggregatesInput | LotScalarWhereWithAggregatesInput[]
    idLot?: StringWithAggregatesFilter<"Lot"> | string
    dateEntree?: DateTimeWithAggregatesFilter<"Lot"> | Date | string
    dateReccup?: StringWithAggregatesFilter<"Lot"> | string
    totalAmount?: FloatWithAggregatesFilter<"Lot"> | number
    solde?: FloatWithAggregatesFilter<"Lot"> | number
    statut?: StringWithAggregatesFilter<"Lot"> | string
    clientId?: StringWithAggregatesFilter<"Lot"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Lot"> | Date | string
  }

  export type VetementWhereInput = {
    AND?: VetementWhereInput | VetementWhereInput[]
    OR?: VetementWhereInput[]
    NOT?: VetementWhereInput | VetementWhereInput[]
    idVetement?: StringFilter<"Vetement"> | string
    description?: StringFilter<"Vetement"> | string
    lotId?: StringFilter<"Vetement"> | string
    typeId?: StringFilter<"Vetement"> | string
    lot?: XOR<LotScalarRelationFilter, LotWhereInput>
    type?: XOR<TypeVetementScalarRelationFilter, TypeVetementWhereInput>
  }

  export type VetementOrderByWithRelationInput = {
    idVetement?: SortOrder
    description?: SortOrder
    lotId?: SortOrder
    typeId?: SortOrder
    lot?: LotOrderByWithRelationInput
    type?: TypeVetementOrderByWithRelationInput
  }

  export type VetementWhereUniqueInput = Prisma.AtLeast<{
    idVetement?: string
    AND?: VetementWhereInput | VetementWhereInput[]
    OR?: VetementWhereInput[]
    NOT?: VetementWhereInput | VetementWhereInput[]
    description?: StringFilter<"Vetement"> | string
    lotId?: StringFilter<"Vetement"> | string
    typeId?: StringFilter<"Vetement"> | string
    lot?: XOR<LotScalarRelationFilter, LotWhereInput>
    type?: XOR<TypeVetementScalarRelationFilter, TypeVetementWhereInput>
  }, "idVetement">

  export type VetementOrderByWithAggregationInput = {
    idVetement?: SortOrder
    description?: SortOrder
    lotId?: SortOrder
    typeId?: SortOrder
    _count?: VetementCountOrderByAggregateInput
    _max?: VetementMaxOrderByAggregateInput
    _min?: VetementMinOrderByAggregateInput
  }

  export type VetementScalarWhereWithAggregatesInput = {
    AND?: VetementScalarWhereWithAggregatesInput | VetementScalarWhereWithAggregatesInput[]
    OR?: VetementScalarWhereWithAggregatesInput[]
    NOT?: VetementScalarWhereWithAggregatesInput | VetementScalarWhereWithAggregatesInput[]
    idVetement?: StringWithAggregatesFilter<"Vetement"> | string
    description?: StringWithAggregatesFilter<"Vetement"> | string
    lotId?: StringWithAggregatesFilter<"Vetement"> | string
    typeId?: StringWithAggregatesFilter<"Vetement"> | string
  }

  export type PaiementWhereInput = {
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    idPaiement?: StringFilter<"Paiement"> | string
    montant?: FloatFilter<"Paiement"> | number
    date?: StringFilter<"Paiement"> | string
    lotId?: StringFilter<"Paiement"> | string
    createdAt?: DateTimeFilter<"Paiement"> | Date | string
    lot?: XOR<LotScalarRelationFilter, LotWhereInput>
  }

  export type PaiementOrderByWithRelationInput = {
    idPaiement?: SortOrder
    montant?: SortOrder
    date?: SortOrder
    lotId?: SortOrder
    createdAt?: SortOrder
    lot?: LotOrderByWithRelationInput
  }

  export type PaiementWhereUniqueInput = Prisma.AtLeast<{
    idPaiement?: string
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    montant?: FloatFilter<"Paiement"> | number
    date?: StringFilter<"Paiement"> | string
    lotId?: StringFilter<"Paiement"> | string
    createdAt?: DateTimeFilter<"Paiement"> | Date | string
    lot?: XOR<LotScalarRelationFilter, LotWhereInput>
  }, "idPaiement">

  export type PaiementOrderByWithAggregationInput = {
    idPaiement?: SortOrder
    montant?: SortOrder
    date?: SortOrder
    lotId?: SortOrder
    createdAt?: SortOrder
    _count?: PaiementCountOrderByAggregateInput
    _avg?: PaiementAvgOrderByAggregateInput
    _max?: PaiementMaxOrderByAggregateInput
    _min?: PaiementMinOrderByAggregateInput
    _sum?: PaiementSumOrderByAggregateInput
  }

  export type PaiementScalarWhereWithAggregatesInput = {
    AND?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    OR?: PaiementScalarWhereWithAggregatesInput[]
    NOT?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    idPaiement?: StringWithAggregatesFilter<"Paiement"> | string
    montant?: FloatWithAggregatesFilter<"Paiement"> | number
    date?: StringWithAggregatesFilter<"Paiement"> | string
    lotId?: StringWithAggregatesFilter<"Paiement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Paiement"> | Date | string
  }

  export type UserCreateInput = {
    idUser?: string
    nom: string
    clerkId: string
    email: string
    role?: string
    telephone?: string | null
    profilePicture?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    idUser?: string
    nom: string
    clerkId: string
    email: string
    role?: string
    telephone?: string | null
    profilePicture?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    idUser?: string
    nom: string
    clerkId: string
    email: string
    role?: string
    telephone?: string | null
    profilePicture?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    idClient?: string
    nom: string
    telephone?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutClientsInput
    lots?: LotCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    idClient?: string
    nom: string
    telephone?: string | null
    createdAt?: Date | string
    userId: string
    lots?: LotUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    idClient?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientsNestedInput
    lots?: LotUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    idClient?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    lots?: LotUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    idClient?: string
    nom: string
    telephone?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type ClientUpdateManyMutationInput = {
    idClient?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    idClient?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TypeVetementCreateInput = {
    idType?: string
    nom: string
    prix: number
    vetements?: VetementCreateNestedManyWithoutTypeInput
  }

  export type TypeVetementUncheckedCreateInput = {
    idType?: string
    nom: string
    prix: number
    vetements?: VetementUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TypeVetementUpdateInput = {
    idType?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    vetements?: VetementUpdateManyWithoutTypeNestedInput
  }

  export type TypeVetementUncheckedUpdateInput = {
    idType?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    vetements?: VetementUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type TypeVetementCreateManyInput = {
    idType?: string
    nom: string
    prix: number
  }

  export type TypeVetementUpdateManyMutationInput = {
    idType?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
  }

  export type TypeVetementUncheckedUpdateManyInput = {
    idType?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
  }

  export type LotCreateInput = {
    idLot?: string
    dateEntree?: Date | string
    dateReccup: string
    totalAmount: number
    solde: number
    statut: string
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutLotsInput
    vetements?: VetementCreateNestedManyWithoutLotInput
    paiements?: PaiementCreateNestedManyWithoutLotInput
  }

  export type LotUncheckedCreateInput = {
    idLot?: string
    dateEntree?: Date | string
    dateReccup: string
    totalAmount: number
    solde: number
    statut: string
    clientId: string
    createdAt?: Date | string
    vetements?: VetementUncheckedCreateNestedManyWithoutLotInput
    paiements?: PaiementUncheckedCreateNestedManyWithoutLotInput
  }

  export type LotUpdateInput = {
    idLot?: StringFieldUpdateOperationsInput | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    dateReccup?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    solde?: FloatFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutLotsNestedInput
    vetements?: VetementUpdateManyWithoutLotNestedInput
    paiements?: PaiementUpdateManyWithoutLotNestedInput
  }

  export type LotUncheckedUpdateInput = {
    idLot?: StringFieldUpdateOperationsInput | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    dateReccup?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    solde?: FloatFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vetements?: VetementUncheckedUpdateManyWithoutLotNestedInput
    paiements?: PaiementUncheckedUpdateManyWithoutLotNestedInput
  }

  export type LotCreateManyInput = {
    idLot?: string
    dateEntree?: Date | string
    dateReccup: string
    totalAmount: number
    solde: number
    statut: string
    clientId: string
    createdAt?: Date | string
  }

  export type LotUpdateManyMutationInput = {
    idLot?: StringFieldUpdateOperationsInput | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    dateReccup?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    solde?: FloatFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LotUncheckedUpdateManyInput = {
    idLot?: StringFieldUpdateOperationsInput | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    dateReccup?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    solde?: FloatFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VetementCreateInput = {
    idVetement?: string
    description: string
    lot: LotCreateNestedOneWithoutVetementsInput
    type: TypeVetementCreateNestedOneWithoutVetementsInput
  }

  export type VetementUncheckedCreateInput = {
    idVetement?: string
    description: string
    lotId: string
    typeId: string
  }

  export type VetementUpdateInput = {
    idVetement?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lot?: LotUpdateOneRequiredWithoutVetementsNestedInput
    type?: TypeVetementUpdateOneRequiredWithoutVetementsNestedInput
  }

  export type VetementUncheckedUpdateInput = {
    idVetement?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lotId?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
  }

  export type VetementCreateManyInput = {
    idVetement?: string
    description: string
    lotId: string
    typeId: string
  }

  export type VetementUpdateManyMutationInput = {
    idVetement?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type VetementUncheckedUpdateManyInput = {
    idVetement?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lotId?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
  }

  export type PaiementCreateInput = {
    idPaiement?: string
    montant: number
    date: string
    createdAt?: Date | string
    lot: LotCreateNestedOneWithoutPaiementsInput
  }

  export type PaiementUncheckedCreateInput = {
    idPaiement?: string
    montant: number
    date: string
    lotId: string
    createdAt?: Date | string
  }

  export type PaiementUpdateInput = {
    idPaiement?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lot?: LotUpdateOneRequiredWithoutPaiementsNestedInput
  }

  export type PaiementUncheckedUpdateInput = {
    idPaiement?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    lotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementCreateManyInput = {
    idPaiement?: string
    montant: number
    date: string
    lotId: string
    createdAt?: Date | string
  }

  export type PaiementUpdateManyMutationInput = {
    idPaiement?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUncheckedUpdateManyInput = {
    idPaiement?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    lotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    idUser?: SortOrder
    nom?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    telephone?: SortOrder
    profilePicture?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    idUser?: SortOrder
    nom?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    telephone?: SortOrder
    profilePicture?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    idUser?: SortOrder
    nom?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    telephone?: SortOrder
    profilePicture?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LotListRelationFilter = {
    every?: LotWhereInput
    some?: LotWhereInput
    none?: LotWhereInput
  }

  export type LotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    idClient?: SortOrder
    nom?: SortOrder
    telephone?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    idClient?: SortOrder
    nom?: SortOrder
    telephone?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    idClient?: SortOrder
    nom?: SortOrder
    telephone?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VetementListRelationFilter = {
    every?: VetementWhereInput
    some?: VetementWhereInput
    none?: VetementWhereInput
  }

  export type VetementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TypeVetementCountOrderByAggregateInput = {
    idType?: SortOrder
    nom?: SortOrder
    prix?: SortOrder
  }

  export type TypeVetementAvgOrderByAggregateInput = {
    prix?: SortOrder
  }

  export type TypeVetementMaxOrderByAggregateInput = {
    idType?: SortOrder
    nom?: SortOrder
    prix?: SortOrder
  }

  export type TypeVetementMinOrderByAggregateInput = {
    idType?: SortOrder
    nom?: SortOrder
    prix?: SortOrder
  }

  export type TypeVetementSumOrderByAggregateInput = {
    prix?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type PaiementListRelationFilter = {
    every?: PaiementWhereInput
    some?: PaiementWhereInput
    none?: PaiementWhereInput
  }

  export type PaiementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LotCountOrderByAggregateInput = {
    idLot?: SortOrder
    dateEntree?: SortOrder
    dateReccup?: SortOrder
    totalAmount?: SortOrder
    solde?: SortOrder
    statut?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
  }

  export type LotAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    solde?: SortOrder
  }

  export type LotMaxOrderByAggregateInput = {
    idLot?: SortOrder
    dateEntree?: SortOrder
    dateReccup?: SortOrder
    totalAmount?: SortOrder
    solde?: SortOrder
    statut?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
  }

  export type LotMinOrderByAggregateInput = {
    idLot?: SortOrder
    dateEntree?: SortOrder
    dateReccup?: SortOrder
    totalAmount?: SortOrder
    solde?: SortOrder
    statut?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
  }

  export type LotSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    solde?: SortOrder
  }

  export type LotScalarRelationFilter = {
    is?: LotWhereInput
    isNot?: LotWhereInput
  }

  export type TypeVetementScalarRelationFilter = {
    is?: TypeVetementWhereInput
    isNot?: TypeVetementWhereInput
  }

  export type VetementCountOrderByAggregateInput = {
    idVetement?: SortOrder
    description?: SortOrder
    lotId?: SortOrder
    typeId?: SortOrder
  }

  export type VetementMaxOrderByAggregateInput = {
    idVetement?: SortOrder
    description?: SortOrder
    lotId?: SortOrder
    typeId?: SortOrder
  }

  export type VetementMinOrderByAggregateInput = {
    idVetement?: SortOrder
    description?: SortOrder
    lotId?: SortOrder
    typeId?: SortOrder
  }

  export type PaiementCountOrderByAggregateInput = {
    idPaiement?: SortOrder
    montant?: SortOrder
    date?: SortOrder
    lotId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaiementAvgOrderByAggregateInput = {
    montant?: SortOrder
  }

  export type PaiementMaxOrderByAggregateInput = {
    idPaiement?: SortOrder
    montant?: SortOrder
    date?: SortOrder
    lotId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaiementMinOrderByAggregateInput = {
    idPaiement?: SortOrder
    montant?: SortOrder
    date?: SortOrder
    lotId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaiementSumOrderByAggregateInput = {
    montant?: SortOrder
  }

  export type ClientCreateNestedManyWithoutUserInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutUserInput | ClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutUserInput | ClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutUserInput | ClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutUserInput | ClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutUserInput | ClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutUserInput | ClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClientsInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput
    connect?: UserWhereUniqueInput
  }

  export type LotCreateNestedManyWithoutClientInput = {
    create?: XOR<LotCreateWithoutClientInput, LotUncheckedCreateWithoutClientInput> | LotCreateWithoutClientInput[] | LotUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LotCreateOrConnectWithoutClientInput | LotCreateOrConnectWithoutClientInput[]
    createMany?: LotCreateManyClientInputEnvelope
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
  }

  export type LotUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<LotCreateWithoutClientInput, LotUncheckedCreateWithoutClientInput> | LotCreateWithoutClientInput[] | LotUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LotCreateOrConnectWithoutClientInput | LotCreateOrConnectWithoutClientInput[]
    createMany?: LotCreateManyClientInputEnvelope
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput
    upsert?: UserUpsertWithoutClientsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientsInput, UserUpdateWithoutClientsInput>, UserUncheckedUpdateWithoutClientsInput>
  }

  export type LotUpdateManyWithoutClientNestedInput = {
    create?: XOR<LotCreateWithoutClientInput, LotUncheckedCreateWithoutClientInput> | LotCreateWithoutClientInput[] | LotUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LotCreateOrConnectWithoutClientInput | LotCreateOrConnectWithoutClientInput[]
    upsert?: LotUpsertWithWhereUniqueWithoutClientInput | LotUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: LotCreateManyClientInputEnvelope
    set?: LotWhereUniqueInput | LotWhereUniqueInput[]
    disconnect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    delete?: LotWhereUniqueInput | LotWhereUniqueInput[]
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    update?: LotUpdateWithWhereUniqueWithoutClientInput | LotUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: LotUpdateManyWithWhereWithoutClientInput | LotUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: LotScalarWhereInput | LotScalarWhereInput[]
  }

  export type LotUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<LotCreateWithoutClientInput, LotUncheckedCreateWithoutClientInput> | LotCreateWithoutClientInput[] | LotUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LotCreateOrConnectWithoutClientInput | LotCreateOrConnectWithoutClientInput[]
    upsert?: LotUpsertWithWhereUniqueWithoutClientInput | LotUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: LotCreateManyClientInputEnvelope
    set?: LotWhereUniqueInput | LotWhereUniqueInput[]
    disconnect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    delete?: LotWhereUniqueInput | LotWhereUniqueInput[]
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    update?: LotUpdateWithWhereUniqueWithoutClientInput | LotUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: LotUpdateManyWithWhereWithoutClientInput | LotUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: LotScalarWhereInput | LotScalarWhereInput[]
  }

  export type VetementCreateNestedManyWithoutTypeInput = {
    create?: XOR<VetementCreateWithoutTypeInput, VetementUncheckedCreateWithoutTypeInput> | VetementCreateWithoutTypeInput[] | VetementUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: VetementCreateOrConnectWithoutTypeInput | VetementCreateOrConnectWithoutTypeInput[]
    createMany?: VetementCreateManyTypeInputEnvelope
    connect?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
  }

  export type VetementUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<VetementCreateWithoutTypeInput, VetementUncheckedCreateWithoutTypeInput> | VetementCreateWithoutTypeInput[] | VetementUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: VetementCreateOrConnectWithoutTypeInput | VetementCreateOrConnectWithoutTypeInput[]
    createMany?: VetementCreateManyTypeInputEnvelope
    connect?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VetementUpdateManyWithoutTypeNestedInput = {
    create?: XOR<VetementCreateWithoutTypeInput, VetementUncheckedCreateWithoutTypeInput> | VetementCreateWithoutTypeInput[] | VetementUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: VetementCreateOrConnectWithoutTypeInput | VetementCreateOrConnectWithoutTypeInput[]
    upsert?: VetementUpsertWithWhereUniqueWithoutTypeInput | VetementUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: VetementCreateManyTypeInputEnvelope
    set?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
    disconnect?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
    delete?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
    connect?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
    update?: VetementUpdateWithWhereUniqueWithoutTypeInput | VetementUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: VetementUpdateManyWithWhereWithoutTypeInput | VetementUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: VetementScalarWhereInput | VetementScalarWhereInput[]
  }

  export type VetementUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<VetementCreateWithoutTypeInput, VetementUncheckedCreateWithoutTypeInput> | VetementCreateWithoutTypeInput[] | VetementUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: VetementCreateOrConnectWithoutTypeInput | VetementCreateOrConnectWithoutTypeInput[]
    upsert?: VetementUpsertWithWhereUniqueWithoutTypeInput | VetementUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: VetementCreateManyTypeInputEnvelope
    set?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
    disconnect?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
    delete?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
    connect?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
    update?: VetementUpdateWithWhereUniqueWithoutTypeInput | VetementUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: VetementUpdateManyWithWhereWithoutTypeInput | VetementUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: VetementScalarWhereInput | VetementScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutLotsInput = {
    create?: XOR<ClientCreateWithoutLotsInput, ClientUncheckedCreateWithoutLotsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutLotsInput
    connect?: ClientWhereUniqueInput
  }

  export type VetementCreateNestedManyWithoutLotInput = {
    create?: XOR<VetementCreateWithoutLotInput, VetementUncheckedCreateWithoutLotInput> | VetementCreateWithoutLotInput[] | VetementUncheckedCreateWithoutLotInput[]
    connectOrCreate?: VetementCreateOrConnectWithoutLotInput | VetementCreateOrConnectWithoutLotInput[]
    createMany?: VetementCreateManyLotInputEnvelope
    connect?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
  }

  export type PaiementCreateNestedManyWithoutLotInput = {
    create?: XOR<PaiementCreateWithoutLotInput, PaiementUncheckedCreateWithoutLotInput> | PaiementCreateWithoutLotInput[] | PaiementUncheckedCreateWithoutLotInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutLotInput | PaiementCreateOrConnectWithoutLotInput[]
    createMany?: PaiementCreateManyLotInputEnvelope
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
  }

  export type VetementUncheckedCreateNestedManyWithoutLotInput = {
    create?: XOR<VetementCreateWithoutLotInput, VetementUncheckedCreateWithoutLotInput> | VetementCreateWithoutLotInput[] | VetementUncheckedCreateWithoutLotInput[]
    connectOrCreate?: VetementCreateOrConnectWithoutLotInput | VetementCreateOrConnectWithoutLotInput[]
    createMany?: VetementCreateManyLotInputEnvelope
    connect?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
  }

  export type PaiementUncheckedCreateNestedManyWithoutLotInput = {
    create?: XOR<PaiementCreateWithoutLotInput, PaiementUncheckedCreateWithoutLotInput> | PaiementCreateWithoutLotInput[] | PaiementUncheckedCreateWithoutLotInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutLotInput | PaiementCreateOrConnectWithoutLotInput[]
    createMany?: PaiementCreateManyLotInputEnvelope
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
  }

  export type ClientUpdateOneRequiredWithoutLotsNestedInput = {
    create?: XOR<ClientCreateWithoutLotsInput, ClientUncheckedCreateWithoutLotsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutLotsInput
    upsert?: ClientUpsertWithoutLotsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutLotsInput, ClientUpdateWithoutLotsInput>, ClientUncheckedUpdateWithoutLotsInput>
  }

  export type VetementUpdateManyWithoutLotNestedInput = {
    create?: XOR<VetementCreateWithoutLotInput, VetementUncheckedCreateWithoutLotInput> | VetementCreateWithoutLotInput[] | VetementUncheckedCreateWithoutLotInput[]
    connectOrCreate?: VetementCreateOrConnectWithoutLotInput | VetementCreateOrConnectWithoutLotInput[]
    upsert?: VetementUpsertWithWhereUniqueWithoutLotInput | VetementUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: VetementCreateManyLotInputEnvelope
    set?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
    disconnect?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
    delete?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
    connect?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
    update?: VetementUpdateWithWhereUniqueWithoutLotInput | VetementUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: VetementUpdateManyWithWhereWithoutLotInput | VetementUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: VetementScalarWhereInput | VetementScalarWhereInput[]
  }

  export type PaiementUpdateManyWithoutLotNestedInput = {
    create?: XOR<PaiementCreateWithoutLotInput, PaiementUncheckedCreateWithoutLotInput> | PaiementCreateWithoutLotInput[] | PaiementUncheckedCreateWithoutLotInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutLotInput | PaiementCreateOrConnectWithoutLotInput[]
    upsert?: PaiementUpsertWithWhereUniqueWithoutLotInput | PaiementUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: PaiementCreateManyLotInputEnvelope
    set?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    disconnect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    delete?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    update?: PaiementUpdateWithWhereUniqueWithoutLotInput | PaiementUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: PaiementUpdateManyWithWhereWithoutLotInput | PaiementUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
  }

  export type VetementUncheckedUpdateManyWithoutLotNestedInput = {
    create?: XOR<VetementCreateWithoutLotInput, VetementUncheckedCreateWithoutLotInput> | VetementCreateWithoutLotInput[] | VetementUncheckedCreateWithoutLotInput[]
    connectOrCreate?: VetementCreateOrConnectWithoutLotInput | VetementCreateOrConnectWithoutLotInput[]
    upsert?: VetementUpsertWithWhereUniqueWithoutLotInput | VetementUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: VetementCreateManyLotInputEnvelope
    set?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
    disconnect?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
    delete?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
    connect?: VetementWhereUniqueInput | VetementWhereUniqueInput[]
    update?: VetementUpdateWithWhereUniqueWithoutLotInput | VetementUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: VetementUpdateManyWithWhereWithoutLotInput | VetementUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: VetementScalarWhereInput | VetementScalarWhereInput[]
  }

  export type PaiementUncheckedUpdateManyWithoutLotNestedInput = {
    create?: XOR<PaiementCreateWithoutLotInput, PaiementUncheckedCreateWithoutLotInput> | PaiementCreateWithoutLotInput[] | PaiementUncheckedCreateWithoutLotInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutLotInput | PaiementCreateOrConnectWithoutLotInput[]
    upsert?: PaiementUpsertWithWhereUniqueWithoutLotInput | PaiementUpsertWithWhereUniqueWithoutLotInput[]
    createMany?: PaiementCreateManyLotInputEnvelope
    set?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    disconnect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    delete?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    update?: PaiementUpdateWithWhereUniqueWithoutLotInput | PaiementUpdateWithWhereUniqueWithoutLotInput[]
    updateMany?: PaiementUpdateManyWithWhereWithoutLotInput | PaiementUpdateManyWithWhereWithoutLotInput[]
    deleteMany?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
  }

  export type LotCreateNestedOneWithoutVetementsInput = {
    create?: XOR<LotCreateWithoutVetementsInput, LotUncheckedCreateWithoutVetementsInput>
    connectOrCreate?: LotCreateOrConnectWithoutVetementsInput
    connect?: LotWhereUniqueInput
  }

  export type TypeVetementCreateNestedOneWithoutVetementsInput = {
    create?: XOR<TypeVetementCreateWithoutVetementsInput, TypeVetementUncheckedCreateWithoutVetementsInput>
    connectOrCreate?: TypeVetementCreateOrConnectWithoutVetementsInput
    connect?: TypeVetementWhereUniqueInput
  }

  export type LotUpdateOneRequiredWithoutVetementsNestedInput = {
    create?: XOR<LotCreateWithoutVetementsInput, LotUncheckedCreateWithoutVetementsInput>
    connectOrCreate?: LotCreateOrConnectWithoutVetementsInput
    upsert?: LotUpsertWithoutVetementsInput
    connect?: LotWhereUniqueInput
    update?: XOR<XOR<LotUpdateToOneWithWhereWithoutVetementsInput, LotUpdateWithoutVetementsInput>, LotUncheckedUpdateWithoutVetementsInput>
  }

  export type TypeVetementUpdateOneRequiredWithoutVetementsNestedInput = {
    create?: XOR<TypeVetementCreateWithoutVetementsInput, TypeVetementUncheckedCreateWithoutVetementsInput>
    connectOrCreate?: TypeVetementCreateOrConnectWithoutVetementsInput
    upsert?: TypeVetementUpsertWithoutVetementsInput
    connect?: TypeVetementWhereUniqueInput
    update?: XOR<XOR<TypeVetementUpdateToOneWithWhereWithoutVetementsInput, TypeVetementUpdateWithoutVetementsInput>, TypeVetementUncheckedUpdateWithoutVetementsInput>
  }

  export type LotCreateNestedOneWithoutPaiementsInput = {
    create?: XOR<LotCreateWithoutPaiementsInput, LotUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: LotCreateOrConnectWithoutPaiementsInput
    connect?: LotWhereUniqueInput
  }

  export type LotUpdateOneRequiredWithoutPaiementsNestedInput = {
    create?: XOR<LotCreateWithoutPaiementsInput, LotUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: LotCreateOrConnectWithoutPaiementsInput
    upsert?: LotUpsertWithoutPaiementsInput
    connect?: LotWhereUniqueInput
    update?: XOR<XOR<LotUpdateToOneWithWhereWithoutPaiementsInput, LotUpdateWithoutPaiementsInput>, LotUncheckedUpdateWithoutPaiementsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ClientCreateWithoutUserInput = {
    idClient?: string
    nom: string
    telephone?: string | null
    createdAt?: Date | string
    lots?: LotCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutUserInput = {
    idClient?: string
    nom: string
    telephone?: string | null
    createdAt?: Date | string
    lots?: LotUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutUserInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
  }

  export type ClientCreateManyUserInputEnvelope = {
    data: ClientCreateManyUserInput | ClientCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithWhereUniqueWithoutUserInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutUserInput, ClientUncheckedUpdateWithoutUserInput>
    create: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutUserInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutUserInput, ClientUncheckedUpdateWithoutUserInput>
  }

  export type ClientUpdateManyWithWhereWithoutUserInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutUserInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    idClient?: StringFilter<"Client"> | string
    nom?: StringFilter<"Client"> | string
    telephone?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    userId?: StringFilter<"Client"> | string
  }

  export type UserCreateWithoutClientsInput = {
    idUser?: string
    nom: string
    clerkId: string
    email: string
    role?: string
    telephone?: string | null
    profilePicture?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutClientsInput = {
    idUser?: string
    nom: string
    clerkId: string
    email: string
    role?: string
    telephone?: string | null
    profilePicture?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutClientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
  }

  export type LotCreateWithoutClientInput = {
    idLot?: string
    dateEntree?: Date | string
    dateReccup: string
    totalAmount: number
    solde: number
    statut: string
    createdAt?: Date | string
    vetements?: VetementCreateNestedManyWithoutLotInput
    paiements?: PaiementCreateNestedManyWithoutLotInput
  }

  export type LotUncheckedCreateWithoutClientInput = {
    idLot?: string
    dateEntree?: Date | string
    dateReccup: string
    totalAmount: number
    solde: number
    statut: string
    createdAt?: Date | string
    vetements?: VetementUncheckedCreateNestedManyWithoutLotInput
    paiements?: PaiementUncheckedCreateNestedManyWithoutLotInput
  }

  export type LotCreateOrConnectWithoutClientInput = {
    where: LotWhereUniqueInput
    create: XOR<LotCreateWithoutClientInput, LotUncheckedCreateWithoutClientInput>
  }

  export type LotCreateManyClientInputEnvelope = {
    data: LotCreateManyClientInput | LotCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClientsInput = {
    update: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
  }

  export type UserUpdateWithoutClientsInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutClientsInput = {
    idUser?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LotUpsertWithWhereUniqueWithoutClientInput = {
    where: LotWhereUniqueInput
    update: XOR<LotUpdateWithoutClientInput, LotUncheckedUpdateWithoutClientInput>
    create: XOR<LotCreateWithoutClientInput, LotUncheckedCreateWithoutClientInput>
  }

  export type LotUpdateWithWhereUniqueWithoutClientInput = {
    where: LotWhereUniqueInput
    data: XOR<LotUpdateWithoutClientInput, LotUncheckedUpdateWithoutClientInput>
  }

  export type LotUpdateManyWithWhereWithoutClientInput = {
    where: LotScalarWhereInput
    data: XOR<LotUpdateManyMutationInput, LotUncheckedUpdateManyWithoutClientInput>
  }

  export type LotScalarWhereInput = {
    AND?: LotScalarWhereInput | LotScalarWhereInput[]
    OR?: LotScalarWhereInput[]
    NOT?: LotScalarWhereInput | LotScalarWhereInput[]
    idLot?: StringFilter<"Lot"> | string
    dateEntree?: DateTimeFilter<"Lot"> | Date | string
    dateReccup?: StringFilter<"Lot"> | string
    totalAmount?: FloatFilter<"Lot"> | number
    solde?: FloatFilter<"Lot"> | number
    statut?: StringFilter<"Lot"> | string
    clientId?: StringFilter<"Lot"> | string
    createdAt?: DateTimeFilter<"Lot"> | Date | string
  }

  export type VetementCreateWithoutTypeInput = {
    idVetement?: string
    description: string
    lot: LotCreateNestedOneWithoutVetementsInput
  }

  export type VetementUncheckedCreateWithoutTypeInput = {
    idVetement?: string
    description: string
    lotId: string
  }

  export type VetementCreateOrConnectWithoutTypeInput = {
    where: VetementWhereUniqueInput
    create: XOR<VetementCreateWithoutTypeInput, VetementUncheckedCreateWithoutTypeInput>
  }

  export type VetementCreateManyTypeInputEnvelope = {
    data: VetementCreateManyTypeInput | VetementCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type VetementUpsertWithWhereUniqueWithoutTypeInput = {
    where: VetementWhereUniqueInput
    update: XOR<VetementUpdateWithoutTypeInput, VetementUncheckedUpdateWithoutTypeInput>
    create: XOR<VetementCreateWithoutTypeInput, VetementUncheckedCreateWithoutTypeInput>
  }

  export type VetementUpdateWithWhereUniqueWithoutTypeInput = {
    where: VetementWhereUniqueInput
    data: XOR<VetementUpdateWithoutTypeInput, VetementUncheckedUpdateWithoutTypeInput>
  }

  export type VetementUpdateManyWithWhereWithoutTypeInput = {
    where: VetementScalarWhereInput
    data: XOR<VetementUpdateManyMutationInput, VetementUncheckedUpdateManyWithoutTypeInput>
  }

  export type VetementScalarWhereInput = {
    AND?: VetementScalarWhereInput | VetementScalarWhereInput[]
    OR?: VetementScalarWhereInput[]
    NOT?: VetementScalarWhereInput | VetementScalarWhereInput[]
    idVetement?: StringFilter<"Vetement"> | string
    description?: StringFilter<"Vetement"> | string
    lotId?: StringFilter<"Vetement"> | string
    typeId?: StringFilter<"Vetement"> | string
  }

  export type ClientCreateWithoutLotsInput = {
    idClient?: string
    nom: string
    telephone?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutClientsInput
  }

  export type ClientUncheckedCreateWithoutLotsInput = {
    idClient?: string
    nom: string
    telephone?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type ClientCreateOrConnectWithoutLotsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutLotsInput, ClientUncheckedCreateWithoutLotsInput>
  }

  export type VetementCreateWithoutLotInput = {
    idVetement?: string
    description: string
    type: TypeVetementCreateNestedOneWithoutVetementsInput
  }

  export type VetementUncheckedCreateWithoutLotInput = {
    idVetement?: string
    description: string
    typeId: string
  }

  export type VetementCreateOrConnectWithoutLotInput = {
    where: VetementWhereUniqueInput
    create: XOR<VetementCreateWithoutLotInput, VetementUncheckedCreateWithoutLotInput>
  }

  export type VetementCreateManyLotInputEnvelope = {
    data: VetementCreateManyLotInput | VetementCreateManyLotInput[]
    skipDuplicates?: boolean
  }

  export type PaiementCreateWithoutLotInput = {
    idPaiement?: string
    montant: number
    date: string
    createdAt?: Date | string
  }

  export type PaiementUncheckedCreateWithoutLotInput = {
    idPaiement?: string
    montant: number
    date: string
    createdAt?: Date | string
  }

  export type PaiementCreateOrConnectWithoutLotInput = {
    where: PaiementWhereUniqueInput
    create: XOR<PaiementCreateWithoutLotInput, PaiementUncheckedCreateWithoutLotInput>
  }

  export type PaiementCreateManyLotInputEnvelope = {
    data: PaiementCreateManyLotInput | PaiementCreateManyLotInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutLotsInput = {
    update: XOR<ClientUpdateWithoutLotsInput, ClientUncheckedUpdateWithoutLotsInput>
    create: XOR<ClientCreateWithoutLotsInput, ClientUncheckedCreateWithoutLotsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutLotsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutLotsInput, ClientUncheckedUpdateWithoutLotsInput>
  }

  export type ClientUpdateWithoutLotsInput = {
    idClient?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutLotsInput = {
    idClient?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VetementUpsertWithWhereUniqueWithoutLotInput = {
    where: VetementWhereUniqueInput
    update: XOR<VetementUpdateWithoutLotInput, VetementUncheckedUpdateWithoutLotInput>
    create: XOR<VetementCreateWithoutLotInput, VetementUncheckedCreateWithoutLotInput>
  }

  export type VetementUpdateWithWhereUniqueWithoutLotInput = {
    where: VetementWhereUniqueInput
    data: XOR<VetementUpdateWithoutLotInput, VetementUncheckedUpdateWithoutLotInput>
  }

  export type VetementUpdateManyWithWhereWithoutLotInput = {
    where: VetementScalarWhereInput
    data: XOR<VetementUpdateManyMutationInput, VetementUncheckedUpdateManyWithoutLotInput>
  }

  export type PaiementUpsertWithWhereUniqueWithoutLotInput = {
    where: PaiementWhereUniqueInput
    update: XOR<PaiementUpdateWithoutLotInput, PaiementUncheckedUpdateWithoutLotInput>
    create: XOR<PaiementCreateWithoutLotInput, PaiementUncheckedCreateWithoutLotInput>
  }

  export type PaiementUpdateWithWhereUniqueWithoutLotInput = {
    where: PaiementWhereUniqueInput
    data: XOR<PaiementUpdateWithoutLotInput, PaiementUncheckedUpdateWithoutLotInput>
  }

  export type PaiementUpdateManyWithWhereWithoutLotInput = {
    where: PaiementScalarWhereInput
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyWithoutLotInput>
  }

  export type PaiementScalarWhereInput = {
    AND?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
    OR?: PaiementScalarWhereInput[]
    NOT?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
    idPaiement?: StringFilter<"Paiement"> | string
    montant?: FloatFilter<"Paiement"> | number
    date?: StringFilter<"Paiement"> | string
    lotId?: StringFilter<"Paiement"> | string
    createdAt?: DateTimeFilter<"Paiement"> | Date | string
  }

  export type LotCreateWithoutVetementsInput = {
    idLot?: string
    dateEntree?: Date | string
    dateReccup: string
    totalAmount: number
    solde: number
    statut: string
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutLotsInput
    paiements?: PaiementCreateNestedManyWithoutLotInput
  }

  export type LotUncheckedCreateWithoutVetementsInput = {
    idLot?: string
    dateEntree?: Date | string
    dateReccup: string
    totalAmount: number
    solde: number
    statut: string
    clientId: string
    createdAt?: Date | string
    paiements?: PaiementUncheckedCreateNestedManyWithoutLotInput
  }

  export type LotCreateOrConnectWithoutVetementsInput = {
    where: LotWhereUniqueInput
    create: XOR<LotCreateWithoutVetementsInput, LotUncheckedCreateWithoutVetementsInput>
  }

  export type TypeVetementCreateWithoutVetementsInput = {
    idType?: string
    nom: string
    prix: number
  }

  export type TypeVetementUncheckedCreateWithoutVetementsInput = {
    idType?: string
    nom: string
    prix: number
  }

  export type TypeVetementCreateOrConnectWithoutVetementsInput = {
    where: TypeVetementWhereUniqueInput
    create: XOR<TypeVetementCreateWithoutVetementsInput, TypeVetementUncheckedCreateWithoutVetementsInput>
  }

  export type LotUpsertWithoutVetementsInput = {
    update: XOR<LotUpdateWithoutVetementsInput, LotUncheckedUpdateWithoutVetementsInput>
    create: XOR<LotCreateWithoutVetementsInput, LotUncheckedCreateWithoutVetementsInput>
    where?: LotWhereInput
  }

  export type LotUpdateToOneWithWhereWithoutVetementsInput = {
    where?: LotWhereInput
    data: XOR<LotUpdateWithoutVetementsInput, LotUncheckedUpdateWithoutVetementsInput>
  }

  export type LotUpdateWithoutVetementsInput = {
    idLot?: StringFieldUpdateOperationsInput | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    dateReccup?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    solde?: FloatFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutLotsNestedInput
    paiements?: PaiementUpdateManyWithoutLotNestedInput
  }

  export type LotUncheckedUpdateWithoutVetementsInput = {
    idLot?: StringFieldUpdateOperationsInput | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    dateReccup?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    solde?: FloatFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paiements?: PaiementUncheckedUpdateManyWithoutLotNestedInput
  }

  export type TypeVetementUpsertWithoutVetementsInput = {
    update: XOR<TypeVetementUpdateWithoutVetementsInput, TypeVetementUncheckedUpdateWithoutVetementsInput>
    create: XOR<TypeVetementCreateWithoutVetementsInput, TypeVetementUncheckedCreateWithoutVetementsInput>
    where?: TypeVetementWhereInput
  }

  export type TypeVetementUpdateToOneWithWhereWithoutVetementsInput = {
    where?: TypeVetementWhereInput
    data: XOR<TypeVetementUpdateWithoutVetementsInput, TypeVetementUncheckedUpdateWithoutVetementsInput>
  }

  export type TypeVetementUpdateWithoutVetementsInput = {
    idType?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
  }

  export type TypeVetementUncheckedUpdateWithoutVetementsInput = {
    idType?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
  }

  export type LotCreateWithoutPaiementsInput = {
    idLot?: string
    dateEntree?: Date | string
    dateReccup: string
    totalAmount: number
    solde: number
    statut: string
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutLotsInput
    vetements?: VetementCreateNestedManyWithoutLotInput
  }

  export type LotUncheckedCreateWithoutPaiementsInput = {
    idLot?: string
    dateEntree?: Date | string
    dateReccup: string
    totalAmount: number
    solde: number
    statut: string
    clientId: string
    createdAt?: Date | string
    vetements?: VetementUncheckedCreateNestedManyWithoutLotInput
  }

  export type LotCreateOrConnectWithoutPaiementsInput = {
    where: LotWhereUniqueInput
    create: XOR<LotCreateWithoutPaiementsInput, LotUncheckedCreateWithoutPaiementsInput>
  }

  export type LotUpsertWithoutPaiementsInput = {
    update: XOR<LotUpdateWithoutPaiementsInput, LotUncheckedUpdateWithoutPaiementsInput>
    create: XOR<LotCreateWithoutPaiementsInput, LotUncheckedCreateWithoutPaiementsInput>
    where?: LotWhereInput
  }

  export type LotUpdateToOneWithWhereWithoutPaiementsInput = {
    where?: LotWhereInput
    data: XOR<LotUpdateWithoutPaiementsInput, LotUncheckedUpdateWithoutPaiementsInput>
  }

  export type LotUpdateWithoutPaiementsInput = {
    idLot?: StringFieldUpdateOperationsInput | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    dateReccup?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    solde?: FloatFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutLotsNestedInput
    vetements?: VetementUpdateManyWithoutLotNestedInput
  }

  export type LotUncheckedUpdateWithoutPaiementsInput = {
    idLot?: StringFieldUpdateOperationsInput | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    dateReccup?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    solde?: FloatFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vetements?: VetementUncheckedUpdateManyWithoutLotNestedInput
  }

  export type ClientCreateManyUserInput = {
    idClient?: string
    nom: string
    telephone?: string | null
    createdAt?: Date | string
  }

  export type ClientUpdateWithoutUserInput = {
    idClient?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lots?: LotUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutUserInput = {
    idClient?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lots?: LotUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutUserInput = {
    idClient?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LotCreateManyClientInput = {
    idLot?: string
    dateEntree?: Date | string
    dateReccup: string
    totalAmount: number
    solde: number
    statut: string
    createdAt?: Date | string
  }

  export type LotUpdateWithoutClientInput = {
    idLot?: StringFieldUpdateOperationsInput | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    dateReccup?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    solde?: FloatFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vetements?: VetementUpdateManyWithoutLotNestedInput
    paiements?: PaiementUpdateManyWithoutLotNestedInput
  }

  export type LotUncheckedUpdateWithoutClientInput = {
    idLot?: StringFieldUpdateOperationsInput | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    dateReccup?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    solde?: FloatFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vetements?: VetementUncheckedUpdateManyWithoutLotNestedInput
    paiements?: PaiementUncheckedUpdateManyWithoutLotNestedInput
  }

  export type LotUncheckedUpdateManyWithoutClientInput = {
    idLot?: StringFieldUpdateOperationsInput | string
    dateEntree?: DateTimeFieldUpdateOperationsInput | Date | string
    dateReccup?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    solde?: FloatFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VetementCreateManyTypeInput = {
    idVetement?: string
    description: string
    lotId: string
  }

  export type VetementUpdateWithoutTypeInput = {
    idVetement?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lot?: LotUpdateOneRequiredWithoutVetementsNestedInput
  }

  export type VetementUncheckedUpdateWithoutTypeInput = {
    idVetement?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lotId?: StringFieldUpdateOperationsInput | string
  }

  export type VetementUncheckedUpdateManyWithoutTypeInput = {
    idVetement?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lotId?: StringFieldUpdateOperationsInput | string
  }

  export type VetementCreateManyLotInput = {
    idVetement?: string
    description: string
    typeId: string
  }

  export type PaiementCreateManyLotInput = {
    idPaiement?: string
    montant: number
    date: string
    createdAt?: Date | string
  }

  export type VetementUpdateWithoutLotInput = {
    idVetement?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: TypeVetementUpdateOneRequiredWithoutVetementsNestedInput
  }

  export type VetementUncheckedUpdateWithoutLotInput = {
    idVetement?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
  }

  export type VetementUncheckedUpdateManyWithoutLotInput = {
    idVetement?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
  }

  export type PaiementUpdateWithoutLotInput = {
    idPaiement?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUncheckedUpdateWithoutLotInput = {
    idPaiement?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUncheckedUpdateManyWithoutLotInput = {
    idPaiement?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}