
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Estoques
 * 
 */
export type Estoques = $Result.DefaultSelection<Prisma.$EstoquesPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Users_Estoques
 * 
 */
export type Users_Estoques = $Result.DefaultSelection<Prisma.$Users_EstoquesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estoques`: Exposes CRUD operations for the **Estoques** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estoques
    * const estoques = await prisma.estoques.findMany()
    * ```
    */
  get estoques(): Prisma.EstoquesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users_Estoques`: Exposes CRUD operations for the **Users_Estoques** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users_Estoques
    * const users_Estoques = await prisma.users_Estoques.findMany()
    * ```
    */
  get users_Estoques(): Prisma.Users_EstoquesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Users: 'Users',
    Estoques: 'Estoques',
    Product: 'Product',
    Users_Estoques: 'Users_Estoques'
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
      modelProps: "users" | "estoques" | "product" | "users_Estoques"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Estoques: {
        payload: Prisma.$EstoquesPayload<ExtArgs>
        fields: Prisma.EstoquesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstoquesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstoquesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquesPayload>
          }
          findFirst: {
            args: Prisma.EstoquesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstoquesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquesPayload>
          }
          findMany: {
            args: Prisma.EstoquesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquesPayload>[]
          }
          create: {
            args: Prisma.EstoquesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquesPayload>
          }
          createMany: {
            args: Prisma.EstoquesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EstoquesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquesPayload>
          }
          update: {
            args: Prisma.EstoquesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquesPayload>
          }
          deleteMany: {
            args: Prisma.EstoquesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstoquesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EstoquesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoquesPayload>
          }
          aggregate: {
            args: Prisma.EstoquesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstoques>
          }
          groupBy: {
            args: Prisma.EstoquesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstoquesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstoquesCountArgs<ExtArgs>
            result: $Utils.Optional<EstoquesCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Users_Estoques: {
        payload: Prisma.$Users_EstoquesPayload<ExtArgs>
        fields: Prisma.Users_EstoquesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Users_EstoquesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_EstoquesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Users_EstoquesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_EstoquesPayload>
          }
          findFirst: {
            args: Prisma.Users_EstoquesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_EstoquesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Users_EstoquesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_EstoquesPayload>
          }
          findMany: {
            args: Prisma.Users_EstoquesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_EstoquesPayload>[]
          }
          create: {
            args: Prisma.Users_EstoquesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_EstoquesPayload>
          }
          createMany: {
            args: Prisma.Users_EstoquesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Users_EstoquesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_EstoquesPayload>
          }
          update: {
            args: Prisma.Users_EstoquesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_EstoquesPayload>
          }
          deleteMany: {
            args: Prisma.Users_EstoquesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Users_EstoquesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Users_EstoquesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_EstoquesPayload>
          }
          aggregate: {
            args: Prisma.Users_EstoquesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers_Estoques>
          }
          groupBy: {
            args: Prisma.Users_EstoquesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Users_EstoquesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Users_EstoquesCountArgs<ExtArgs>
            result: $Utils.Optional<Users_EstoquesCountAggregateOutputType> | number
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
    users?: UsersOmit
    estoques?: EstoquesOmit
    product?: ProductOmit
    users_Estoques?: Users_EstoquesOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    userEstoques: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userEstoques?: boolean | UsersCountOutputTypeCountUserEstoquesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUserEstoquesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Users_EstoquesWhereInput
  }


  /**
   * Count Type EstoquesCountOutputType
   */

  export type EstoquesCountOutputType = {
    estoqueUsers: number
  }

  export type EstoquesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estoqueUsers?: boolean | EstoquesCountOutputTypeCountEstoqueUsersArgs
  }

  // Custom InputTypes
  /**
   * EstoquesCountOutputType without action
   */
  export type EstoquesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstoquesCountOutputType
     */
    select?: EstoquesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstoquesCountOutputType without action
   */
  export type EstoquesCountOutputTypeCountEstoqueUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Users_EstoquesWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    produtosEstoque: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtosEstoque?: boolean | ProductCountOutputTypeCountProdutosEstoqueArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProdutosEstoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstoquesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    idUser: number | null
  }

  export type UsersSumAggregateOutputType = {
    idUser: number | null
  }

  export type UsersMinAggregateOutputType = {
    idUser: number | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    idUser: number | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    idUser: number
    email: number
    name: number
    password: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    idUser?: true
  }

  export type UsersSumAggregateInputType = {
    idUser?: true
  }

  export type UsersMinAggregateInputType = {
    idUser?: true
    email?: true
    name?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    idUser?: true
    email?: true
    name?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    idUser?: true
    email?: true
    name?: true
    password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    idUser: number
    email: string
    name: string
    password: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUser?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    userEstoques?: boolean | Users$userEstoquesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    idUser?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idUser" | "email" | "name" | "password", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userEstoques?: boolean | Users$userEstoquesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      userEstoques: Prisma.$Users_EstoquesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idUser: number
      email: string
      name: string
      password: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `idUser`
     * const usersWithIdUserOnly = await prisma.users.findMany({ select: { idUser: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userEstoques<T extends Users$userEstoquesArgs<ExtArgs> = {}>(args?: Subset<T, Users$userEstoquesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Users_EstoquesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly idUser: FieldRef<"Users", 'Int'>
    readonly email: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.userEstoques
   */
  export type Users$userEstoquesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Estoques
     */
    select?: Users_EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Estoques
     */
    omit?: Users_EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_EstoquesInclude<ExtArgs> | null
    where?: Users_EstoquesWhereInput
    orderBy?: Users_EstoquesOrderByWithRelationInput | Users_EstoquesOrderByWithRelationInput[]
    cursor?: Users_EstoquesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Users_EstoquesScalarFieldEnum | Users_EstoquesScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Estoques
   */

  export type AggregateEstoques = {
    _count: EstoquesCountAggregateOutputType | null
    _avg: EstoquesAvgAggregateOutputType | null
    _sum: EstoquesSumAggregateOutputType | null
    _min: EstoquesMinAggregateOutputType | null
    _max: EstoquesMaxAggregateOutputType | null
  }

  export type EstoquesAvgAggregateOutputType = {
    idEstoque: number | null
    id_Product: number | null
  }

  export type EstoquesSumAggregateOutputType = {
    idEstoque: number | null
    id_Product: number | null
  }

  export type EstoquesMinAggregateOutputType = {
    idEstoque: number | null
    id_Product: number | null
  }

  export type EstoquesMaxAggregateOutputType = {
    idEstoque: number | null
    id_Product: number | null
  }

  export type EstoquesCountAggregateOutputType = {
    idEstoque: number
    id_Product: number
    _all: number
  }


  export type EstoquesAvgAggregateInputType = {
    idEstoque?: true
    id_Product?: true
  }

  export type EstoquesSumAggregateInputType = {
    idEstoque?: true
    id_Product?: true
  }

  export type EstoquesMinAggregateInputType = {
    idEstoque?: true
    id_Product?: true
  }

  export type EstoquesMaxAggregateInputType = {
    idEstoque?: true
    id_Product?: true
  }

  export type EstoquesCountAggregateInputType = {
    idEstoque?: true
    id_Product?: true
    _all?: true
  }

  export type EstoquesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estoques to aggregate.
     */
    where?: EstoquesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estoques to fetch.
     */
    orderBy?: EstoquesOrderByWithRelationInput | EstoquesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstoquesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estoques
    **/
    _count?: true | EstoquesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstoquesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstoquesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstoquesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstoquesMaxAggregateInputType
  }

  export type GetEstoquesAggregateType<T extends EstoquesAggregateArgs> = {
        [P in keyof T & keyof AggregateEstoques]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstoques[P]>
      : GetScalarType<T[P], AggregateEstoques[P]>
  }




  export type EstoquesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstoquesWhereInput
    orderBy?: EstoquesOrderByWithAggregationInput | EstoquesOrderByWithAggregationInput[]
    by: EstoquesScalarFieldEnum[] | EstoquesScalarFieldEnum
    having?: EstoquesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstoquesCountAggregateInputType | true
    _avg?: EstoquesAvgAggregateInputType
    _sum?: EstoquesSumAggregateInputType
    _min?: EstoquesMinAggregateInputType
    _max?: EstoquesMaxAggregateInputType
  }

  export type EstoquesGroupByOutputType = {
    idEstoque: number
    id_Product: number
    _count: EstoquesCountAggregateOutputType | null
    _avg: EstoquesAvgAggregateOutputType | null
    _sum: EstoquesSumAggregateOutputType | null
    _min: EstoquesMinAggregateOutputType | null
    _max: EstoquesMaxAggregateOutputType | null
  }

  type GetEstoquesGroupByPayload<T extends EstoquesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstoquesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstoquesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstoquesGroupByOutputType[P]>
            : GetScalarType<T[P], EstoquesGroupByOutputType[P]>
        }
      >
    >


  export type EstoquesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEstoque?: boolean
    id_Product?: boolean
    produto?: boolean | ProductDefaultArgs<ExtArgs>
    estoqueUsers?: boolean | Estoques$estoqueUsersArgs<ExtArgs>
    _count?: boolean | EstoquesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estoques"]>



  export type EstoquesSelectScalar = {
    idEstoque?: boolean
    id_Product?: boolean
  }

  export type EstoquesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idEstoque" | "id_Product", ExtArgs["result"]["estoques"]>
  export type EstoquesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProductDefaultArgs<ExtArgs>
    estoqueUsers?: boolean | Estoques$estoqueUsersArgs<ExtArgs>
    _count?: boolean | EstoquesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EstoquesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estoques"
    objects: {
      produto: Prisma.$ProductPayload<ExtArgs>
      estoqueUsers: Prisma.$Users_EstoquesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idEstoque: number
      id_Product: number
    }, ExtArgs["result"]["estoques"]>
    composites: {}
  }

  type EstoquesGetPayload<S extends boolean | null | undefined | EstoquesDefaultArgs> = $Result.GetResult<Prisma.$EstoquesPayload, S>

  type EstoquesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstoquesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstoquesCountAggregateInputType | true
    }

  export interface EstoquesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estoques'], meta: { name: 'Estoques' } }
    /**
     * Find zero or one Estoques that matches the filter.
     * @param {EstoquesFindUniqueArgs} args - Arguments to find a Estoques
     * @example
     * // Get one Estoques
     * const estoques = await prisma.estoques.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstoquesFindUniqueArgs>(args: SelectSubset<T, EstoquesFindUniqueArgs<ExtArgs>>): Prisma__EstoquesClient<$Result.GetResult<Prisma.$EstoquesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estoques that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstoquesFindUniqueOrThrowArgs} args - Arguments to find a Estoques
     * @example
     * // Get one Estoques
     * const estoques = await prisma.estoques.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstoquesFindUniqueOrThrowArgs>(args: SelectSubset<T, EstoquesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstoquesClient<$Result.GetResult<Prisma.$EstoquesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estoques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoquesFindFirstArgs} args - Arguments to find a Estoques
     * @example
     * // Get one Estoques
     * const estoques = await prisma.estoques.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstoquesFindFirstArgs>(args?: SelectSubset<T, EstoquesFindFirstArgs<ExtArgs>>): Prisma__EstoquesClient<$Result.GetResult<Prisma.$EstoquesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estoques that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoquesFindFirstOrThrowArgs} args - Arguments to find a Estoques
     * @example
     * // Get one Estoques
     * const estoques = await prisma.estoques.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstoquesFindFirstOrThrowArgs>(args?: SelectSubset<T, EstoquesFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstoquesClient<$Result.GetResult<Prisma.$EstoquesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estoques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoquesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estoques
     * const estoques = await prisma.estoques.findMany()
     * 
     * // Get first 10 Estoques
     * const estoques = await prisma.estoques.findMany({ take: 10 })
     * 
     * // Only select the `idEstoque`
     * const estoquesWithIdEstoqueOnly = await prisma.estoques.findMany({ select: { idEstoque: true } })
     * 
     */
    findMany<T extends EstoquesFindManyArgs>(args?: SelectSubset<T, EstoquesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstoquesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estoques.
     * @param {EstoquesCreateArgs} args - Arguments to create a Estoques.
     * @example
     * // Create one Estoques
     * const Estoques = await prisma.estoques.create({
     *   data: {
     *     // ... data to create a Estoques
     *   }
     * })
     * 
     */
    create<T extends EstoquesCreateArgs>(args: SelectSubset<T, EstoquesCreateArgs<ExtArgs>>): Prisma__EstoquesClient<$Result.GetResult<Prisma.$EstoquesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estoques.
     * @param {EstoquesCreateManyArgs} args - Arguments to create many Estoques.
     * @example
     * // Create many Estoques
     * const estoques = await prisma.estoques.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstoquesCreateManyArgs>(args?: SelectSubset<T, EstoquesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Estoques.
     * @param {EstoquesDeleteArgs} args - Arguments to delete one Estoques.
     * @example
     * // Delete one Estoques
     * const Estoques = await prisma.estoques.delete({
     *   where: {
     *     // ... filter to delete one Estoques
     *   }
     * })
     * 
     */
    delete<T extends EstoquesDeleteArgs>(args: SelectSubset<T, EstoquesDeleteArgs<ExtArgs>>): Prisma__EstoquesClient<$Result.GetResult<Prisma.$EstoquesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estoques.
     * @param {EstoquesUpdateArgs} args - Arguments to update one Estoques.
     * @example
     * // Update one Estoques
     * const estoques = await prisma.estoques.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstoquesUpdateArgs>(args: SelectSubset<T, EstoquesUpdateArgs<ExtArgs>>): Prisma__EstoquesClient<$Result.GetResult<Prisma.$EstoquesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estoques.
     * @param {EstoquesDeleteManyArgs} args - Arguments to filter Estoques to delete.
     * @example
     * // Delete a few Estoques
     * const { count } = await prisma.estoques.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstoquesDeleteManyArgs>(args?: SelectSubset<T, EstoquesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoquesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estoques
     * const estoques = await prisma.estoques.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstoquesUpdateManyArgs>(args: SelectSubset<T, EstoquesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estoques.
     * @param {EstoquesUpsertArgs} args - Arguments to update or create a Estoques.
     * @example
     * // Update or create a Estoques
     * const estoques = await prisma.estoques.upsert({
     *   create: {
     *     // ... data to create a Estoques
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estoques we want to update
     *   }
     * })
     */
    upsert<T extends EstoquesUpsertArgs>(args: SelectSubset<T, EstoquesUpsertArgs<ExtArgs>>): Prisma__EstoquesClient<$Result.GetResult<Prisma.$EstoquesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoquesCountArgs} args - Arguments to filter Estoques to count.
     * @example
     * // Count the number of Estoques
     * const count = await prisma.estoques.count({
     *   where: {
     *     // ... the filter for the Estoques we want to count
     *   }
     * })
    **/
    count<T extends EstoquesCountArgs>(
      args?: Subset<T, EstoquesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstoquesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoquesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstoquesAggregateArgs>(args: Subset<T, EstoquesAggregateArgs>): Prisma.PrismaPromise<GetEstoquesAggregateType<T>>

    /**
     * Group by Estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoquesGroupByArgs} args - Group by arguments.
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
      T extends EstoquesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstoquesGroupByArgs['orderBy'] }
        : { orderBy?: EstoquesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstoquesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstoquesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estoques model
   */
  readonly fields: EstoquesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estoques.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstoquesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estoqueUsers<T extends Estoques$estoqueUsersArgs<ExtArgs> = {}>(args?: Subset<T, Estoques$estoqueUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Users_EstoquesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Estoques model
   */
  interface EstoquesFieldRefs {
    readonly idEstoque: FieldRef<"Estoques", 'Int'>
    readonly id_Product: FieldRef<"Estoques", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Estoques findUnique
   */
  export type EstoquesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoques
     */
    select?: EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoques
     */
    omit?: EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoquesInclude<ExtArgs> | null
    /**
     * Filter, which Estoques to fetch.
     */
    where: EstoquesWhereUniqueInput
  }

  /**
   * Estoques findUniqueOrThrow
   */
  export type EstoquesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoques
     */
    select?: EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoques
     */
    omit?: EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoquesInclude<ExtArgs> | null
    /**
     * Filter, which Estoques to fetch.
     */
    where: EstoquesWhereUniqueInput
  }

  /**
   * Estoques findFirst
   */
  export type EstoquesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoques
     */
    select?: EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoques
     */
    omit?: EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoquesInclude<ExtArgs> | null
    /**
     * Filter, which Estoques to fetch.
     */
    where?: EstoquesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estoques to fetch.
     */
    orderBy?: EstoquesOrderByWithRelationInput | EstoquesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estoques.
     */
    cursor?: EstoquesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estoques.
     */
    distinct?: EstoquesScalarFieldEnum | EstoquesScalarFieldEnum[]
  }

  /**
   * Estoques findFirstOrThrow
   */
  export type EstoquesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoques
     */
    select?: EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoques
     */
    omit?: EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoquesInclude<ExtArgs> | null
    /**
     * Filter, which Estoques to fetch.
     */
    where?: EstoquesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estoques to fetch.
     */
    orderBy?: EstoquesOrderByWithRelationInput | EstoquesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estoques.
     */
    cursor?: EstoquesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estoques.
     */
    distinct?: EstoquesScalarFieldEnum | EstoquesScalarFieldEnum[]
  }

  /**
   * Estoques findMany
   */
  export type EstoquesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoques
     */
    select?: EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoques
     */
    omit?: EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoquesInclude<ExtArgs> | null
    /**
     * Filter, which Estoques to fetch.
     */
    where?: EstoquesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estoques to fetch.
     */
    orderBy?: EstoquesOrderByWithRelationInput | EstoquesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estoques.
     */
    cursor?: EstoquesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estoques.
     */
    skip?: number
    distinct?: EstoquesScalarFieldEnum | EstoquesScalarFieldEnum[]
  }

  /**
   * Estoques create
   */
  export type EstoquesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoques
     */
    select?: EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoques
     */
    omit?: EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoquesInclude<ExtArgs> | null
    /**
     * The data needed to create a Estoques.
     */
    data: XOR<EstoquesCreateInput, EstoquesUncheckedCreateInput>
  }

  /**
   * Estoques createMany
   */
  export type EstoquesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estoques.
     */
    data: EstoquesCreateManyInput | EstoquesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estoques update
   */
  export type EstoquesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoques
     */
    select?: EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoques
     */
    omit?: EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoquesInclude<ExtArgs> | null
    /**
     * The data needed to update a Estoques.
     */
    data: XOR<EstoquesUpdateInput, EstoquesUncheckedUpdateInput>
    /**
     * Choose, which Estoques to update.
     */
    where: EstoquesWhereUniqueInput
  }

  /**
   * Estoques updateMany
   */
  export type EstoquesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estoques.
     */
    data: XOR<EstoquesUpdateManyMutationInput, EstoquesUncheckedUpdateManyInput>
    /**
     * Filter which Estoques to update
     */
    where?: EstoquesWhereInput
    /**
     * Limit how many Estoques to update.
     */
    limit?: number
  }

  /**
   * Estoques upsert
   */
  export type EstoquesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoques
     */
    select?: EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoques
     */
    omit?: EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoquesInclude<ExtArgs> | null
    /**
     * The filter to search for the Estoques to update in case it exists.
     */
    where: EstoquesWhereUniqueInput
    /**
     * In case the Estoques found by the `where` argument doesn't exist, create a new Estoques with this data.
     */
    create: XOR<EstoquesCreateInput, EstoquesUncheckedCreateInput>
    /**
     * In case the Estoques was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstoquesUpdateInput, EstoquesUncheckedUpdateInput>
  }

  /**
   * Estoques delete
   */
  export type EstoquesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoques
     */
    select?: EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoques
     */
    omit?: EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoquesInclude<ExtArgs> | null
    /**
     * Filter which Estoques to delete.
     */
    where: EstoquesWhereUniqueInput
  }

  /**
   * Estoques deleteMany
   */
  export type EstoquesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estoques to delete
     */
    where?: EstoquesWhereInput
    /**
     * Limit how many Estoques to delete.
     */
    limit?: number
  }

  /**
   * Estoques.estoqueUsers
   */
  export type Estoques$estoqueUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Estoques
     */
    select?: Users_EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Estoques
     */
    omit?: Users_EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_EstoquesInclude<ExtArgs> | null
    where?: Users_EstoquesWhereInput
    orderBy?: Users_EstoquesOrderByWithRelationInput | Users_EstoquesOrderByWithRelationInput[]
    cursor?: Users_EstoquesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Users_EstoquesScalarFieldEnum | Users_EstoquesScalarFieldEnum[]
  }

  /**
   * Estoques without action
   */
  export type EstoquesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoques
     */
    select?: EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoques
     */
    omit?: EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoquesInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id_Product: number | null
  }

  export type ProductSumAggregateOutputType = {
    id_Product: number | null
  }

  export type ProductMinAggregateOutputType = {
    id_Product: number | null
    name: string | null
    categoriaProdutos: string | null
    sku: string | null
    descricao: string | null
    data_de_validade: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id_Product: number | null
    name: string | null
    categoriaProdutos: string | null
    sku: string | null
    descricao: string | null
    data_de_validade: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id_Product: number
    name: number
    categoriaProdutos: number
    sku: number
    descricao: number
    data_de_validade: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id_Product?: true
  }

  export type ProductSumAggregateInputType = {
    id_Product?: true
  }

  export type ProductMinAggregateInputType = {
    id_Product?: true
    name?: true
    categoriaProdutos?: true
    sku?: true
    descricao?: true
    data_de_validade?: true
  }

  export type ProductMaxAggregateInputType = {
    id_Product?: true
    name?: true
    categoriaProdutos?: true
    sku?: true
    descricao?: true
    data_de_validade?: true
  }

  export type ProductCountAggregateInputType = {
    id_Product?: true
    name?: true
    categoriaProdutos?: true
    sku?: true
    descricao?: true
    data_de_validade?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id_Product: number
    name: string
    categoriaProdutos: string
    sku: string
    descricao: string | null
    data_de_validade: Date | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Product?: boolean
    name?: boolean
    categoriaProdutos?: boolean
    sku?: boolean
    descricao?: boolean
    data_de_validade?: boolean
    produtosEstoque?: boolean | Product$produtosEstoqueArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id_Product?: boolean
    name?: boolean
    categoriaProdutos?: boolean
    sku?: boolean
    descricao?: boolean
    data_de_validade?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Product" | "name" | "categoriaProdutos" | "sku" | "descricao" | "data_de_validade", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtosEstoque?: boolean | Product$produtosEstoqueArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      produtosEstoque: Prisma.$EstoquesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Product: number
      name: string
      categoriaProdutos: string
      sku: string
      descricao: string | null
      data_de_validade: Date | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id_Product`
     * const productWithId_ProductOnly = await prisma.product.findMany({ select: { id_Product: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produtosEstoque<T extends Product$produtosEstoqueArgs<ExtArgs> = {}>(args?: Subset<T, Product$produtosEstoqueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstoquesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id_Product: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly categoriaProdutos: FieldRef<"Product", 'String'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly descricao: FieldRef<"Product", 'String'>
    readonly data_de_validade: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.produtosEstoque
   */
  export type Product$produtosEstoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estoques
     */
    select?: EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estoques
     */
    omit?: EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoquesInclude<ExtArgs> | null
    where?: EstoquesWhereInput
    orderBy?: EstoquesOrderByWithRelationInput | EstoquesOrderByWithRelationInput[]
    cursor?: EstoquesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstoquesScalarFieldEnum | EstoquesScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Users_Estoques
   */

  export type AggregateUsers_Estoques = {
    _count: Users_EstoquesCountAggregateOutputType | null
    _avg: Users_EstoquesAvgAggregateOutputType | null
    _sum: Users_EstoquesSumAggregateOutputType | null
    _min: Users_EstoquesMinAggregateOutputType | null
    _max: Users_EstoquesMaxAggregateOutputType | null
  }

  export type Users_EstoquesAvgAggregateOutputType = {
    idUser: number | null
    idEstoque: number | null
  }

  export type Users_EstoquesSumAggregateOutputType = {
    idUser: number | null
    idEstoque: number | null
  }

  export type Users_EstoquesMinAggregateOutputType = {
    idUser: number | null
    idEstoque: number | null
  }

  export type Users_EstoquesMaxAggregateOutputType = {
    idUser: number | null
    idEstoque: number | null
  }

  export type Users_EstoquesCountAggregateOutputType = {
    idUser: number
    idEstoque: number
    _all: number
  }


  export type Users_EstoquesAvgAggregateInputType = {
    idUser?: true
    idEstoque?: true
  }

  export type Users_EstoquesSumAggregateInputType = {
    idUser?: true
    idEstoque?: true
  }

  export type Users_EstoquesMinAggregateInputType = {
    idUser?: true
    idEstoque?: true
  }

  export type Users_EstoquesMaxAggregateInputType = {
    idUser?: true
    idEstoque?: true
  }

  export type Users_EstoquesCountAggregateInputType = {
    idUser?: true
    idEstoque?: true
    _all?: true
  }

  export type Users_EstoquesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users_Estoques to aggregate.
     */
    where?: Users_EstoquesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_Estoques to fetch.
     */
    orderBy?: Users_EstoquesOrderByWithRelationInput | Users_EstoquesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Users_EstoquesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_Estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_Estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users_Estoques
    **/
    _count?: true | Users_EstoquesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Users_EstoquesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Users_EstoquesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Users_EstoquesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Users_EstoquesMaxAggregateInputType
  }

  export type GetUsers_EstoquesAggregateType<T extends Users_EstoquesAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers_Estoques]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers_Estoques[P]>
      : GetScalarType<T[P], AggregateUsers_Estoques[P]>
  }




  export type Users_EstoquesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Users_EstoquesWhereInput
    orderBy?: Users_EstoquesOrderByWithAggregationInput | Users_EstoquesOrderByWithAggregationInput[]
    by: Users_EstoquesScalarFieldEnum[] | Users_EstoquesScalarFieldEnum
    having?: Users_EstoquesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Users_EstoquesCountAggregateInputType | true
    _avg?: Users_EstoquesAvgAggregateInputType
    _sum?: Users_EstoquesSumAggregateInputType
    _min?: Users_EstoquesMinAggregateInputType
    _max?: Users_EstoquesMaxAggregateInputType
  }

  export type Users_EstoquesGroupByOutputType = {
    idUser: number
    idEstoque: number
    _count: Users_EstoquesCountAggregateOutputType | null
    _avg: Users_EstoquesAvgAggregateOutputType | null
    _sum: Users_EstoquesSumAggregateOutputType | null
    _min: Users_EstoquesMinAggregateOutputType | null
    _max: Users_EstoquesMaxAggregateOutputType | null
  }

  type GetUsers_EstoquesGroupByPayload<T extends Users_EstoquesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Users_EstoquesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Users_EstoquesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Users_EstoquesGroupByOutputType[P]>
            : GetScalarType<T[P], Users_EstoquesGroupByOutputType[P]>
        }
      >
    >


  export type Users_EstoquesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUser?: boolean
    idEstoque?: boolean
    user_estoque?: boolean | UsersDefaultArgs<ExtArgs>
    estoque_user?: boolean | EstoquesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users_Estoques"]>



  export type Users_EstoquesSelectScalar = {
    idUser?: boolean
    idEstoque?: boolean
  }

  export type Users_EstoquesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idUser" | "idEstoque", ExtArgs["result"]["users_Estoques"]>
  export type Users_EstoquesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_estoque?: boolean | UsersDefaultArgs<ExtArgs>
    estoque_user?: boolean | EstoquesDefaultArgs<ExtArgs>
  }

  export type $Users_EstoquesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users_Estoques"
    objects: {
      user_estoque: Prisma.$UsersPayload<ExtArgs>
      estoque_user: Prisma.$EstoquesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idUser: number
      idEstoque: number
    }, ExtArgs["result"]["users_Estoques"]>
    composites: {}
  }

  type Users_EstoquesGetPayload<S extends boolean | null | undefined | Users_EstoquesDefaultArgs> = $Result.GetResult<Prisma.$Users_EstoquesPayload, S>

  type Users_EstoquesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Users_EstoquesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Users_EstoquesCountAggregateInputType | true
    }

  export interface Users_EstoquesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users_Estoques'], meta: { name: 'Users_Estoques' } }
    /**
     * Find zero or one Users_Estoques that matches the filter.
     * @param {Users_EstoquesFindUniqueArgs} args - Arguments to find a Users_Estoques
     * @example
     * // Get one Users_Estoques
     * const users_Estoques = await prisma.users_Estoques.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Users_EstoquesFindUniqueArgs>(args: SelectSubset<T, Users_EstoquesFindUniqueArgs<ExtArgs>>): Prisma__Users_EstoquesClient<$Result.GetResult<Prisma.$Users_EstoquesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users_Estoques that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Users_EstoquesFindUniqueOrThrowArgs} args - Arguments to find a Users_Estoques
     * @example
     * // Get one Users_Estoques
     * const users_Estoques = await prisma.users_Estoques.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Users_EstoquesFindUniqueOrThrowArgs>(args: SelectSubset<T, Users_EstoquesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Users_EstoquesClient<$Result.GetResult<Prisma.$Users_EstoquesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_Estoques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_EstoquesFindFirstArgs} args - Arguments to find a Users_Estoques
     * @example
     * // Get one Users_Estoques
     * const users_Estoques = await prisma.users_Estoques.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Users_EstoquesFindFirstArgs>(args?: SelectSubset<T, Users_EstoquesFindFirstArgs<ExtArgs>>): Prisma__Users_EstoquesClient<$Result.GetResult<Prisma.$Users_EstoquesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_Estoques that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_EstoquesFindFirstOrThrowArgs} args - Arguments to find a Users_Estoques
     * @example
     * // Get one Users_Estoques
     * const users_Estoques = await prisma.users_Estoques.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Users_EstoquesFindFirstOrThrowArgs>(args?: SelectSubset<T, Users_EstoquesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Users_EstoquesClient<$Result.GetResult<Prisma.$Users_EstoquesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users_Estoques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_EstoquesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users_Estoques
     * const users_Estoques = await prisma.users_Estoques.findMany()
     * 
     * // Get first 10 Users_Estoques
     * const users_Estoques = await prisma.users_Estoques.findMany({ take: 10 })
     * 
     * // Only select the `idUser`
     * const users_EstoquesWithIdUserOnly = await prisma.users_Estoques.findMany({ select: { idUser: true } })
     * 
     */
    findMany<T extends Users_EstoquesFindManyArgs>(args?: SelectSubset<T, Users_EstoquesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Users_EstoquesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users_Estoques.
     * @param {Users_EstoquesCreateArgs} args - Arguments to create a Users_Estoques.
     * @example
     * // Create one Users_Estoques
     * const Users_Estoques = await prisma.users_Estoques.create({
     *   data: {
     *     // ... data to create a Users_Estoques
     *   }
     * })
     * 
     */
    create<T extends Users_EstoquesCreateArgs>(args: SelectSubset<T, Users_EstoquesCreateArgs<ExtArgs>>): Prisma__Users_EstoquesClient<$Result.GetResult<Prisma.$Users_EstoquesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users_Estoques.
     * @param {Users_EstoquesCreateManyArgs} args - Arguments to create many Users_Estoques.
     * @example
     * // Create many Users_Estoques
     * const users_Estoques = await prisma.users_Estoques.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Users_EstoquesCreateManyArgs>(args?: SelectSubset<T, Users_EstoquesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users_Estoques.
     * @param {Users_EstoquesDeleteArgs} args - Arguments to delete one Users_Estoques.
     * @example
     * // Delete one Users_Estoques
     * const Users_Estoques = await prisma.users_Estoques.delete({
     *   where: {
     *     // ... filter to delete one Users_Estoques
     *   }
     * })
     * 
     */
    delete<T extends Users_EstoquesDeleteArgs>(args: SelectSubset<T, Users_EstoquesDeleteArgs<ExtArgs>>): Prisma__Users_EstoquesClient<$Result.GetResult<Prisma.$Users_EstoquesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users_Estoques.
     * @param {Users_EstoquesUpdateArgs} args - Arguments to update one Users_Estoques.
     * @example
     * // Update one Users_Estoques
     * const users_Estoques = await prisma.users_Estoques.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Users_EstoquesUpdateArgs>(args: SelectSubset<T, Users_EstoquesUpdateArgs<ExtArgs>>): Prisma__Users_EstoquesClient<$Result.GetResult<Prisma.$Users_EstoquesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users_Estoques.
     * @param {Users_EstoquesDeleteManyArgs} args - Arguments to filter Users_Estoques to delete.
     * @example
     * // Delete a few Users_Estoques
     * const { count } = await prisma.users_Estoques.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Users_EstoquesDeleteManyArgs>(args?: SelectSubset<T, Users_EstoquesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_Estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_EstoquesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users_Estoques
     * const users_Estoques = await prisma.users_Estoques.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Users_EstoquesUpdateManyArgs>(args: SelectSubset<T, Users_EstoquesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users_Estoques.
     * @param {Users_EstoquesUpsertArgs} args - Arguments to update or create a Users_Estoques.
     * @example
     * // Update or create a Users_Estoques
     * const users_Estoques = await prisma.users_Estoques.upsert({
     *   create: {
     *     // ... data to create a Users_Estoques
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users_Estoques we want to update
     *   }
     * })
     */
    upsert<T extends Users_EstoquesUpsertArgs>(args: SelectSubset<T, Users_EstoquesUpsertArgs<ExtArgs>>): Prisma__Users_EstoquesClient<$Result.GetResult<Prisma.$Users_EstoquesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users_Estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_EstoquesCountArgs} args - Arguments to filter Users_Estoques to count.
     * @example
     * // Count the number of Users_Estoques
     * const count = await prisma.users_Estoques.count({
     *   where: {
     *     // ... the filter for the Users_Estoques we want to count
     *   }
     * })
    **/
    count<T extends Users_EstoquesCountArgs>(
      args?: Subset<T, Users_EstoquesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Users_EstoquesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users_Estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_EstoquesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Users_EstoquesAggregateArgs>(args: Subset<T, Users_EstoquesAggregateArgs>): Prisma.PrismaPromise<GetUsers_EstoquesAggregateType<T>>

    /**
     * Group by Users_Estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_EstoquesGroupByArgs} args - Group by arguments.
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
      T extends Users_EstoquesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Users_EstoquesGroupByArgs['orderBy'] }
        : { orderBy?: Users_EstoquesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Users_EstoquesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsers_EstoquesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users_Estoques model
   */
  readonly fields: Users_EstoquesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users_Estoques.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Users_EstoquesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_estoque<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estoque_user<T extends EstoquesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstoquesDefaultArgs<ExtArgs>>): Prisma__EstoquesClient<$Result.GetResult<Prisma.$EstoquesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Users_Estoques model
   */
  interface Users_EstoquesFieldRefs {
    readonly idUser: FieldRef<"Users_Estoques", 'Int'>
    readonly idEstoque: FieldRef<"Users_Estoques", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Users_Estoques findUnique
   */
  export type Users_EstoquesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Estoques
     */
    select?: Users_EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Estoques
     */
    omit?: Users_EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_EstoquesInclude<ExtArgs> | null
    /**
     * Filter, which Users_Estoques to fetch.
     */
    where: Users_EstoquesWhereUniqueInput
  }

  /**
   * Users_Estoques findUniqueOrThrow
   */
  export type Users_EstoquesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Estoques
     */
    select?: Users_EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Estoques
     */
    omit?: Users_EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_EstoquesInclude<ExtArgs> | null
    /**
     * Filter, which Users_Estoques to fetch.
     */
    where: Users_EstoquesWhereUniqueInput
  }

  /**
   * Users_Estoques findFirst
   */
  export type Users_EstoquesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Estoques
     */
    select?: Users_EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Estoques
     */
    omit?: Users_EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_EstoquesInclude<ExtArgs> | null
    /**
     * Filter, which Users_Estoques to fetch.
     */
    where?: Users_EstoquesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_Estoques to fetch.
     */
    orderBy?: Users_EstoquesOrderByWithRelationInput | Users_EstoquesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users_Estoques.
     */
    cursor?: Users_EstoquesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_Estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_Estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users_Estoques.
     */
    distinct?: Users_EstoquesScalarFieldEnum | Users_EstoquesScalarFieldEnum[]
  }

  /**
   * Users_Estoques findFirstOrThrow
   */
  export type Users_EstoquesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Estoques
     */
    select?: Users_EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Estoques
     */
    omit?: Users_EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_EstoquesInclude<ExtArgs> | null
    /**
     * Filter, which Users_Estoques to fetch.
     */
    where?: Users_EstoquesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_Estoques to fetch.
     */
    orderBy?: Users_EstoquesOrderByWithRelationInput | Users_EstoquesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users_Estoques.
     */
    cursor?: Users_EstoquesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_Estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_Estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users_Estoques.
     */
    distinct?: Users_EstoquesScalarFieldEnum | Users_EstoquesScalarFieldEnum[]
  }

  /**
   * Users_Estoques findMany
   */
  export type Users_EstoquesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Estoques
     */
    select?: Users_EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Estoques
     */
    omit?: Users_EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_EstoquesInclude<ExtArgs> | null
    /**
     * Filter, which Users_Estoques to fetch.
     */
    where?: Users_EstoquesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_Estoques to fetch.
     */
    orderBy?: Users_EstoquesOrderByWithRelationInput | Users_EstoquesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users_Estoques.
     */
    cursor?: Users_EstoquesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_Estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_Estoques.
     */
    skip?: number
    distinct?: Users_EstoquesScalarFieldEnum | Users_EstoquesScalarFieldEnum[]
  }

  /**
   * Users_Estoques create
   */
  export type Users_EstoquesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Estoques
     */
    select?: Users_EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Estoques
     */
    omit?: Users_EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_EstoquesInclude<ExtArgs> | null
    /**
     * The data needed to create a Users_Estoques.
     */
    data: XOR<Users_EstoquesCreateInput, Users_EstoquesUncheckedCreateInput>
  }

  /**
   * Users_Estoques createMany
   */
  export type Users_EstoquesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users_Estoques.
     */
    data: Users_EstoquesCreateManyInput | Users_EstoquesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users_Estoques update
   */
  export type Users_EstoquesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Estoques
     */
    select?: Users_EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Estoques
     */
    omit?: Users_EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_EstoquesInclude<ExtArgs> | null
    /**
     * The data needed to update a Users_Estoques.
     */
    data: XOR<Users_EstoquesUpdateInput, Users_EstoquesUncheckedUpdateInput>
    /**
     * Choose, which Users_Estoques to update.
     */
    where: Users_EstoquesWhereUniqueInput
  }

  /**
   * Users_Estoques updateMany
   */
  export type Users_EstoquesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users_Estoques.
     */
    data: XOR<Users_EstoquesUpdateManyMutationInput, Users_EstoquesUncheckedUpdateManyInput>
    /**
     * Filter which Users_Estoques to update
     */
    where?: Users_EstoquesWhereInput
    /**
     * Limit how many Users_Estoques to update.
     */
    limit?: number
  }

  /**
   * Users_Estoques upsert
   */
  export type Users_EstoquesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Estoques
     */
    select?: Users_EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Estoques
     */
    omit?: Users_EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_EstoquesInclude<ExtArgs> | null
    /**
     * The filter to search for the Users_Estoques to update in case it exists.
     */
    where: Users_EstoquesWhereUniqueInput
    /**
     * In case the Users_Estoques found by the `where` argument doesn't exist, create a new Users_Estoques with this data.
     */
    create: XOR<Users_EstoquesCreateInput, Users_EstoquesUncheckedCreateInput>
    /**
     * In case the Users_Estoques was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Users_EstoquesUpdateInput, Users_EstoquesUncheckedUpdateInput>
  }

  /**
   * Users_Estoques delete
   */
  export type Users_EstoquesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Estoques
     */
    select?: Users_EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Estoques
     */
    omit?: Users_EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_EstoquesInclude<ExtArgs> | null
    /**
     * Filter which Users_Estoques to delete.
     */
    where: Users_EstoquesWhereUniqueInput
  }

  /**
   * Users_Estoques deleteMany
   */
  export type Users_EstoquesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users_Estoques to delete
     */
    where?: Users_EstoquesWhereInput
    /**
     * Limit how many Users_Estoques to delete.
     */
    limit?: number
  }

  /**
   * Users_Estoques without action
   */
  export type Users_EstoquesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Estoques
     */
    select?: Users_EstoquesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Estoques
     */
    omit?: Users_EstoquesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_EstoquesInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    idUser: 'idUser',
    email: 'email',
    name: 'name',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const EstoquesScalarFieldEnum: {
    idEstoque: 'idEstoque',
    id_Product: 'id_Product'
  };

  export type EstoquesScalarFieldEnum = (typeof EstoquesScalarFieldEnum)[keyof typeof EstoquesScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id_Product: 'id_Product',
    name: 'name',
    categoriaProdutos: 'categoriaProdutos',
    sku: 'sku',
    descricao: 'descricao',
    data_de_validade: 'data_de_validade'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const Users_EstoquesScalarFieldEnum: {
    idUser: 'idUser',
    idEstoque: 'idEstoque'
  };

  export type Users_EstoquesScalarFieldEnum = (typeof Users_EstoquesScalarFieldEnum)[keyof typeof Users_EstoquesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UsersOrderByRelevanceFieldEnum: {
    email: 'email',
    name: 'name',
    password: 'password'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ProductOrderByRelevanceFieldEnum: {
    name: 'name',
    categoriaProdutos: 'categoriaProdutos',
    sku: 'sku',
    descricao: 'descricao'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    idUser?: IntFilter<"Users"> | number
    email?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    userEstoques?: Users_EstoquesListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    idUser?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    userEstoques?: Users_EstoquesOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    idUser?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    userEstoques?: Users_EstoquesListRelationFilter
  }, "idUser" | "email">

  export type UsersOrderByWithAggregationInput = {
    idUser?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    idUser?: IntWithAggregatesFilter<"Users"> | number
    email?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
  }

  export type EstoquesWhereInput = {
    AND?: EstoquesWhereInput | EstoquesWhereInput[]
    OR?: EstoquesWhereInput[]
    NOT?: EstoquesWhereInput | EstoquesWhereInput[]
    idEstoque?: IntFilter<"Estoques"> | number
    id_Product?: IntFilter<"Estoques"> | number
    produto?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    estoqueUsers?: Users_EstoquesListRelationFilter
  }

  export type EstoquesOrderByWithRelationInput = {
    idEstoque?: SortOrder
    id_Product?: SortOrder
    produto?: ProductOrderByWithRelationInput
    estoqueUsers?: Users_EstoquesOrderByRelationAggregateInput
  }

  export type EstoquesWhereUniqueInput = Prisma.AtLeast<{
    idEstoque?: number
    AND?: EstoquesWhereInput | EstoquesWhereInput[]
    OR?: EstoquesWhereInput[]
    NOT?: EstoquesWhereInput | EstoquesWhereInput[]
    id_Product?: IntFilter<"Estoques"> | number
    produto?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    estoqueUsers?: Users_EstoquesListRelationFilter
  }, "idEstoque">

  export type EstoquesOrderByWithAggregationInput = {
    idEstoque?: SortOrder
    id_Product?: SortOrder
    _count?: EstoquesCountOrderByAggregateInput
    _avg?: EstoquesAvgOrderByAggregateInput
    _max?: EstoquesMaxOrderByAggregateInput
    _min?: EstoquesMinOrderByAggregateInput
    _sum?: EstoquesSumOrderByAggregateInput
  }

  export type EstoquesScalarWhereWithAggregatesInput = {
    AND?: EstoquesScalarWhereWithAggregatesInput | EstoquesScalarWhereWithAggregatesInput[]
    OR?: EstoquesScalarWhereWithAggregatesInput[]
    NOT?: EstoquesScalarWhereWithAggregatesInput | EstoquesScalarWhereWithAggregatesInput[]
    idEstoque?: IntWithAggregatesFilter<"Estoques"> | number
    id_Product?: IntWithAggregatesFilter<"Estoques"> | number
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id_Product?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    categoriaProdutos?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    descricao?: StringNullableFilter<"Product"> | string | null
    data_de_validade?: DateTimeNullableFilter<"Product"> | Date | string | null
    produtosEstoque?: EstoquesListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id_Product?: SortOrder
    name?: SortOrder
    categoriaProdutos?: SortOrder
    sku?: SortOrder
    descricao?: SortOrderInput | SortOrder
    data_de_validade?: SortOrderInput | SortOrder
    produtosEstoque?: EstoquesOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id_Product?: number
    sku?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    categoriaProdutos?: StringFilter<"Product"> | string
    descricao?: StringNullableFilter<"Product"> | string | null
    data_de_validade?: DateTimeNullableFilter<"Product"> | Date | string | null
    produtosEstoque?: EstoquesListRelationFilter
  }, "id_Product" | "sku">

  export type ProductOrderByWithAggregationInput = {
    id_Product?: SortOrder
    name?: SortOrder
    categoriaProdutos?: SortOrder
    sku?: SortOrder
    descricao?: SortOrderInput | SortOrder
    data_de_validade?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id_Product?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    categoriaProdutos?: StringWithAggregatesFilter<"Product"> | string
    sku?: StringWithAggregatesFilter<"Product"> | string
    descricao?: StringNullableWithAggregatesFilter<"Product"> | string | null
    data_de_validade?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
  }

  export type Users_EstoquesWhereInput = {
    AND?: Users_EstoquesWhereInput | Users_EstoquesWhereInput[]
    OR?: Users_EstoquesWhereInput[]
    NOT?: Users_EstoquesWhereInput | Users_EstoquesWhereInput[]
    idUser?: IntFilter<"Users_Estoques"> | number
    idEstoque?: IntFilter<"Users_Estoques"> | number
    user_estoque?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    estoque_user?: XOR<EstoquesScalarRelationFilter, EstoquesWhereInput>
  }

  export type Users_EstoquesOrderByWithRelationInput = {
    idUser?: SortOrder
    idEstoque?: SortOrder
    user_estoque?: UsersOrderByWithRelationInput
    estoque_user?: EstoquesOrderByWithRelationInput
  }

  export type Users_EstoquesWhereUniqueInput = Prisma.AtLeast<{
    idUser?: number
    AND?: Users_EstoquesWhereInput | Users_EstoquesWhereInput[]
    OR?: Users_EstoquesWhereInput[]
    NOT?: Users_EstoquesWhereInput | Users_EstoquesWhereInput[]
    idEstoque?: IntFilter<"Users_Estoques"> | number
    user_estoque?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    estoque_user?: XOR<EstoquesScalarRelationFilter, EstoquesWhereInput>
  }, "idUser">

  export type Users_EstoquesOrderByWithAggregationInput = {
    idUser?: SortOrder
    idEstoque?: SortOrder
    _count?: Users_EstoquesCountOrderByAggregateInput
    _avg?: Users_EstoquesAvgOrderByAggregateInput
    _max?: Users_EstoquesMaxOrderByAggregateInput
    _min?: Users_EstoquesMinOrderByAggregateInput
    _sum?: Users_EstoquesSumOrderByAggregateInput
  }

  export type Users_EstoquesScalarWhereWithAggregatesInput = {
    AND?: Users_EstoquesScalarWhereWithAggregatesInput | Users_EstoquesScalarWhereWithAggregatesInput[]
    OR?: Users_EstoquesScalarWhereWithAggregatesInput[]
    NOT?: Users_EstoquesScalarWhereWithAggregatesInput | Users_EstoquesScalarWhereWithAggregatesInput[]
    idUser?: IntWithAggregatesFilter<"Users_Estoques"> | number
    idEstoque?: IntWithAggregatesFilter<"Users_Estoques"> | number
  }

  export type UsersCreateInput = {
    email: string
    name: string
    password: string
    userEstoques?: Users_EstoquesCreateNestedManyWithoutUser_estoqueInput
  }

  export type UsersUncheckedCreateInput = {
    idUser?: number
    email: string
    name: string
    password: string
    userEstoques?: Users_EstoquesUncheckedCreateNestedManyWithoutUser_estoqueInput
  }

  export type UsersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userEstoques?: Users_EstoquesUpdateManyWithoutUser_estoqueNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    idUser?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userEstoques?: Users_EstoquesUncheckedUpdateManyWithoutUser_estoqueNestedInput
  }

  export type UsersCreateManyInput = {
    idUser?: number
    email: string
    name: string
    password: string
  }

  export type UsersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    idUser?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type EstoquesCreateInput = {
    produto: ProductCreateNestedOneWithoutProdutosEstoqueInput
    estoqueUsers?: Users_EstoquesCreateNestedManyWithoutEstoque_userInput
  }

  export type EstoquesUncheckedCreateInput = {
    idEstoque?: number
    id_Product: number
    estoqueUsers?: Users_EstoquesUncheckedCreateNestedManyWithoutEstoque_userInput
  }

  export type EstoquesUpdateInput = {
    produto?: ProductUpdateOneRequiredWithoutProdutosEstoqueNestedInput
    estoqueUsers?: Users_EstoquesUpdateManyWithoutEstoque_userNestedInput
  }

  export type EstoquesUncheckedUpdateInput = {
    idEstoque?: IntFieldUpdateOperationsInput | number
    id_Product?: IntFieldUpdateOperationsInput | number
    estoqueUsers?: Users_EstoquesUncheckedUpdateManyWithoutEstoque_userNestedInput
  }

  export type EstoquesCreateManyInput = {
    idEstoque?: number
    id_Product: number
  }

  export type EstoquesUpdateManyMutationInput = {

  }

  export type EstoquesUncheckedUpdateManyInput = {
    idEstoque?: IntFieldUpdateOperationsInput | number
    id_Product?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateInput = {
    name: string
    categoriaProdutos: string
    sku: string
    descricao?: string | null
    data_de_validade?: Date | string | null
    produtosEstoque?: EstoquesCreateNestedManyWithoutProdutoInput
  }

  export type ProductUncheckedCreateInput = {
    id_Product?: number
    name: string
    categoriaProdutos: string
    sku: string
    descricao?: string | null
    data_de_validade?: Date | string | null
    produtosEstoque?: EstoquesUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    categoriaProdutos?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_de_validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produtosEstoque?: EstoquesUpdateManyWithoutProdutoNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id_Product?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoriaProdutos?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_de_validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produtosEstoque?: EstoquesUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProductCreateManyInput = {
    id_Product?: number
    name: string
    categoriaProdutos: string
    sku: string
    descricao?: string | null
    data_de_validade?: Date | string | null
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    categoriaProdutos?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_de_validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id_Product?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoriaProdutos?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_de_validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Users_EstoquesCreateInput = {
    user_estoque: UsersCreateNestedOneWithoutUserEstoquesInput
    estoque_user: EstoquesCreateNestedOneWithoutEstoqueUsersInput
  }

  export type Users_EstoquesUncheckedCreateInput = {
    idUser: number
    idEstoque: number
  }

  export type Users_EstoquesUpdateInput = {
    user_estoque?: UsersUpdateOneRequiredWithoutUserEstoquesNestedInput
    estoque_user?: EstoquesUpdateOneRequiredWithoutEstoqueUsersNestedInput
  }

  export type Users_EstoquesUncheckedUpdateInput = {
    idUser?: IntFieldUpdateOperationsInput | number
    idEstoque?: IntFieldUpdateOperationsInput | number
  }

  export type Users_EstoquesCreateManyInput = {
    idUser: number
    idEstoque: number
  }

  export type Users_EstoquesUpdateManyMutationInput = {

  }

  export type Users_EstoquesUncheckedUpdateManyInput = {
    idUser?: IntFieldUpdateOperationsInput | number
    idEstoque?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Users_EstoquesListRelationFilter = {
    every?: Users_EstoquesWhereInput
    some?: Users_EstoquesWhereInput
    none?: Users_EstoquesWhereInput
  }

  export type Users_EstoquesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    idUser?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    idUser?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    idUser?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    idUser?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    idUser?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type EstoquesCountOrderByAggregateInput = {
    idEstoque?: SortOrder
    id_Product?: SortOrder
  }

  export type EstoquesAvgOrderByAggregateInput = {
    idEstoque?: SortOrder
    id_Product?: SortOrder
  }

  export type EstoquesMaxOrderByAggregateInput = {
    idEstoque?: SortOrder
    id_Product?: SortOrder
  }

  export type EstoquesMinOrderByAggregateInput = {
    idEstoque?: SortOrder
    id_Product?: SortOrder
  }

  export type EstoquesSumOrderByAggregateInput = {
    idEstoque?: SortOrder
    id_Product?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EstoquesListRelationFilter = {
    every?: EstoquesWhereInput
    some?: EstoquesWhereInput
    none?: EstoquesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EstoquesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    id_Product?: SortOrder
    name?: SortOrder
    categoriaProdutos?: SortOrder
    sku?: SortOrder
    descricao?: SortOrder
    data_de_validade?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id_Product?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id_Product?: SortOrder
    name?: SortOrder
    categoriaProdutos?: SortOrder
    sku?: SortOrder
    descricao?: SortOrder
    data_de_validade?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id_Product?: SortOrder
    name?: SortOrder
    categoriaProdutos?: SortOrder
    sku?: SortOrder
    descricao?: SortOrder
    data_de_validade?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id_Product?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type EstoquesScalarRelationFilter = {
    is?: EstoquesWhereInput
    isNot?: EstoquesWhereInput
  }

  export type Users_EstoquesCountOrderByAggregateInput = {
    idUser?: SortOrder
    idEstoque?: SortOrder
  }

  export type Users_EstoquesAvgOrderByAggregateInput = {
    idUser?: SortOrder
    idEstoque?: SortOrder
  }

  export type Users_EstoquesMaxOrderByAggregateInput = {
    idUser?: SortOrder
    idEstoque?: SortOrder
  }

  export type Users_EstoquesMinOrderByAggregateInput = {
    idUser?: SortOrder
    idEstoque?: SortOrder
  }

  export type Users_EstoquesSumOrderByAggregateInput = {
    idUser?: SortOrder
    idEstoque?: SortOrder
  }

  export type Users_EstoquesCreateNestedManyWithoutUser_estoqueInput = {
    create?: XOR<Users_EstoquesCreateWithoutUser_estoqueInput, Users_EstoquesUncheckedCreateWithoutUser_estoqueInput> | Users_EstoquesCreateWithoutUser_estoqueInput[] | Users_EstoquesUncheckedCreateWithoutUser_estoqueInput[]
    connectOrCreate?: Users_EstoquesCreateOrConnectWithoutUser_estoqueInput | Users_EstoquesCreateOrConnectWithoutUser_estoqueInput[]
    createMany?: Users_EstoquesCreateManyUser_estoqueInputEnvelope
    connect?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
  }

  export type Users_EstoquesUncheckedCreateNestedManyWithoutUser_estoqueInput = {
    create?: XOR<Users_EstoquesCreateWithoutUser_estoqueInput, Users_EstoquesUncheckedCreateWithoutUser_estoqueInput> | Users_EstoquesCreateWithoutUser_estoqueInput[] | Users_EstoquesUncheckedCreateWithoutUser_estoqueInput[]
    connectOrCreate?: Users_EstoquesCreateOrConnectWithoutUser_estoqueInput | Users_EstoquesCreateOrConnectWithoutUser_estoqueInput[]
    createMany?: Users_EstoquesCreateManyUser_estoqueInputEnvelope
    connect?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Users_EstoquesUpdateManyWithoutUser_estoqueNestedInput = {
    create?: XOR<Users_EstoquesCreateWithoutUser_estoqueInput, Users_EstoquesUncheckedCreateWithoutUser_estoqueInput> | Users_EstoquesCreateWithoutUser_estoqueInput[] | Users_EstoquesUncheckedCreateWithoutUser_estoqueInput[]
    connectOrCreate?: Users_EstoquesCreateOrConnectWithoutUser_estoqueInput | Users_EstoquesCreateOrConnectWithoutUser_estoqueInput[]
    upsert?: Users_EstoquesUpsertWithWhereUniqueWithoutUser_estoqueInput | Users_EstoquesUpsertWithWhereUniqueWithoutUser_estoqueInput[]
    createMany?: Users_EstoquesCreateManyUser_estoqueInputEnvelope
    set?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
    disconnect?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
    delete?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
    connect?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
    update?: Users_EstoquesUpdateWithWhereUniqueWithoutUser_estoqueInput | Users_EstoquesUpdateWithWhereUniqueWithoutUser_estoqueInput[]
    updateMany?: Users_EstoquesUpdateManyWithWhereWithoutUser_estoqueInput | Users_EstoquesUpdateManyWithWhereWithoutUser_estoqueInput[]
    deleteMany?: Users_EstoquesScalarWhereInput | Users_EstoquesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Users_EstoquesUncheckedUpdateManyWithoutUser_estoqueNestedInput = {
    create?: XOR<Users_EstoquesCreateWithoutUser_estoqueInput, Users_EstoquesUncheckedCreateWithoutUser_estoqueInput> | Users_EstoquesCreateWithoutUser_estoqueInput[] | Users_EstoquesUncheckedCreateWithoutUser_estoqueInput[]
    connectOrCreate?: Users_EstoquesCreateOrConnectWithoutUser_estoqueInput | Users_EstoquesCreateOrConnectWithoutUser_estoqueInput[]
    upsert?: Users_EstoquesUpsertWithWhereUniqueWithoutUser_estoqueInput | Users_EstoquesUpsertWithWhereUniqueWithoutUser_estoqueInput[]
    createMany?: Users_EstoquesCreateManyUser_estoqueInputEnvelope
    set?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
    disconnect?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
    delete?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
    connect?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
    update?: Users_EstoquesUpdateWithWhereUniqueWithoutUser_estoqueInput | Users_EstoquesUpdateWithWhereUniqueWithoutUser_estoqueInput[]
    updateMany?: Users_EstoquesUpdateManyWithWhereWithoutUser_estoqueInput | Users_EstoquesUpdateManyWithWhereWithoutUser_estoqueInput[]
    deleteMany?: Users_EstoquesScalarWhereInput | Users_EstoquesScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProdutosEstoqueInput = {
    create?: XOR<ProductCreateWithoutProdutosEstoqueInput, ProductUncheckedCreateWithoutProdutosEstoqueInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProdutosEstoqueInput
    connect?: ProductWhereUniqueInput
  }

  export type Users_EstoquesCreateNestedManyWithoutEstoque_userInput = {
    create?: XOR<Users_EstoquesCreateWithoutEstoque_userInput, Users_EstoquesUncheckedCreateWithoutEstoque_userInput> | Users_EstoquesCreateWithoutEstoque_userInput[] | Users_EstoquesUncheckedCreateWithoutEstoque_userInput[]
    connectOrCreate?: Users_EstoquesCreateOrConnectWithoutEstoque_userInput | Users_EstoquesCreateOrConnectWithoutEstoque_userInput[]
    createMany?: Users_EstoquesCreateManyEstoque_userInputEnvelope
    connect?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
  }

  export type Users_EstoquesUncheckedCreateNestedManyWithoutEstoque_userInput = {
    create?: XOR<Users_EstoquesCreateWithoutEstoque_userInput, Users_EstoquesUncheckedCreateWithoutEstoque_userInput> | Users_EstoquesCreateWithoutEstoque_userInput[] | Users_EstoquesUncheckedCreateWithoutEstoque_userInput[]
    connectOrCreate?: Users_EstoquesCreateOrConnectWithoutEstoque_userInput | Users_EstoquesCreateOrConnectWithoutEstoque_userInput[]
    createMany?: Users_EstoquesCreateManyEstoque_userInputEnvelope
    connect?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutProdutosEstoqueNestedInput = {
    create?: XOR<ProductCreateWithoutProdutosEstoqueInput, ProductUncheckedCreateWithoutProdutosEstoqueInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProdutosEstoqueInput
    upsert?: ProductUpsertWithoutProdutosEstoqueInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProdutosEstoqueInput, ProductUpdateWithoutProdutosEstoqueInput>, ProductUncheckedUpdateWithoutProdutosEstoqueInput>
  }

  export type Users_EstoquesUpdateManyWithoutEstoque_userNestedInput = {
    create?: XOR<Users_EstoquesCreateWithoutEstoque_userInput, Users_EstoquesUncheckedCreateWithoutEstoque_userInput> | Users_EstoquesCreateWithoutEstoque_userInput[] | Users_EstoquesUncheckedCreateWithoutEstoque_userInput[]
    connectOrCreate?: Users_EstoquesCreateOrConnectWithoutEstoque_userInput | Users_EstoquesCreateOrConnectWithoutEstoque_userInput[]
    upsert?: Users_EstoquesUpsertWithWhereUniqueWithoutEstoque_userInput | Users_EstoquesUpsertWithWhereUniqueWithoutEstoque_userInput[]
    createMany?: Users_EstoquesCreateManyEstoque_userInputEnvelope
    set?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
    disconnect?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
    delete?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
    connect?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
    update?: Users_EstoquesUpdateWithWhereUniqueWithoutEstoque_userInput | Users_EstoquesUpdateWithWhereUniqueWithoutEstoque_userInput[]
    updateMany?: Users_EstoquesUpdateManyWithWhereWithoutEstoque_userInput | Users_EstoquesUpdateManyWithWhereWithoutEstoque_userInput[]
    deleteMany?: Users_EstoquesScalarWhereInput | Users_EstoquesScalarWhereInput[]
  }

  export type Users_EstoquesUncheckedUpdateManyWithoutEstoque_userNestedInput = {
    create?: XOR<Users_EstoquesCreateWithoutEstoque_userInput, Users_EstoquesUncheckedCreateWithoutEstoque_userInput> | Users_EstoquesCreateWithoutEstoque_userInput[] | Users_EstoquesUncheckedCreateWithoutEstoque_userInput[]
    connectOrCreate?: Users_EstoquesCreateOrConnectWithoutEstoque_userInput | Users_EstoquesCreateOrConnectWithoutEstoque_userInput[]
    upsert?: Users_EstoquesUpsertWithWhereUniqueWithoutEstoque_userInput | Users_EstoquesUpsertWithWhereUniqueWithoutEstoque_userInput[]
    createMany?: Users_EstoquesCreateManyEstoque_userInputEnvelope
    set?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
    disconnect?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
    delete?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
    connect?: Users_EstoquesWhereUniqueInput | Users_EstoquesWhereUniqueInput[]
    update?: Users_EstoquesUpdateWithWhereUniqueWithoutEstoque_userInput | Users_EstoquesUpdateWithWhereUniqueWithoutEstoque_userInput[]
    updateMany?: Users_EstoquesUpdateManyWithWhereWithoutEstoque_userInput | Users_EstoquesUpdateManyWithWhereWithoutEstoque_userInput[]
    deleteMany?: Users_EstoquesScalarWhereInput | Users_EstoquesScalarWhereInput[]
  }

  export type EstoquesCreateNestedManyWithoutProdutoInput = {
    create?: XOR<EstoquesCreateWithoutProdutoInput, EstoquesUncheckedCreateWithoutProdutoInput> | EstoquesCreateWithoutProdutoInput[] | EstoquesUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: EstoquesCreateOrConnectWithoutProdutoInput | EstoquesCreateOrConnectWithoutProdutoInput[]
    createMany?: EstoquesCreateManyProdutoInputEnvelope
    connect?: EstoquesWhereUniqueInput | EstoquesWhereUniqueInput[]
  }

  export type EstoquesUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<EstoquesCreateWithoutProdutoInput, EstoquesUncheckedCreateWithoutProdutoInput> | EstoquesCreateWithoutProdutoInput[] | EstoquesUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: EstoquesCreateOrConnectWithoutProdutoInput | EstoquesCreateOrConnectWithoutProdutoInput[]
    createMany?: EstoquesCreateManyProdutoInputEnvelope
    connect?: EstoquesWhereUniqueInput | EstoquesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EstoquesUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<EstoquesCreateWithoutProdutoInput, EstoquesUncheckedCreateWithoutProdutoInput> | EstoquesCreateWithoutProdutoInput[] | EstoquesUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: EstoquesCreateOrConnectWithoutProdutoInput | EstoquesCreateOrConnectWithoutProdutoInput[]
    upsert?: EstoquesUpsertWithWhereUniqueWithoutProdutoInput | EstoquesUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: EstoquesCreateManyProdutoInputEnvelope
    set?: EstoquesWhereUniqueInput | EstoquesWhereUniqueInput[]
    disconnect?: EstoquesWhereUniqueInput | EstoquesWhereUniqueInput[]
    delete?: EstoquesWhereUniqueInput | EstoquesWhereUniqueInput[]
    connect?: EstoquesWhereUniqueInput | EstoquesWhereUniqueInput[]
    update?: EstoquesUpdateWithWhereUniqueWithoutProdutoInput | EstoquesUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: EstoquesUpdateManyWithWhereWithoutProdutoInput | EstoquesUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: EstoquesScalarWhereInput | EstoquesScalarWhereInput[]
  }

  export type EstoquesUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<EstoquesCreateWithoutProdutoInput, EstoquesUncheckedCreateWithoutProdutoInput> | EstoquesCreateWithoutProdutoInput[] | EstoquesUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: EstoquesCreateOrConnectWithoutProdutoInput | EstoquesCreateOrConnectWithoutProdutoInput[]
    upsert?: EstoquesUpsertWithWhereUniqueWithoutProdutoInput | EstoquesUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: EstoquesCreateManyProdutoInputEnvelope
    set?: EstoquesWhereUniqueInput | EstoquesWhereUniqueInput[]
    disconnect?: EstoquesWhereUniqueInput | EstoquesWhereUniqueInput[]
    delete?: EstoquesWhereUniqueInput | EstoquesWhereUniqueInput[]
    connect?: EstoquesWhereUniqueInput | EstoquesWhereUniqueInput[]
    update?: EstoquesUpdateWithWhereUniqueWithoutProdutoInput | EstoquesUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: EstoquesUpdateManyWithWhereWithoutProdutoInput | EstoquesUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: EstoquesScalarWhereInput | EstoquesScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutUserEstoquesInput = {
    create?: XOR<UsersCreateWithoutUserEstoquesInput, UsersUncheckedCreateWithoutUserEstoquesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserEstoquesInput
    connect?: UsersWhereUniqueInput
  }

  export type EstoquesCreateNestedOneWithoutEstoqueUsersInput = {
    create?: XOR<EstoquesCreateWithoutEstoqueUsersInput, EstoquesUncheckedCreateWithoutEstoqueUsersInput>
    connectOrCreate?: EstoquesCreateOrConnectWithoutEstoqueUsersInput
    connect?: EstoquesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutUserEstoquesNestedInput = {
    create?: XOR<UsersCreateWithoutUserEstoquesInput, UsersUncheckedCreateWithoutUserEstoquesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserEstoquesInput
    upsert?: UsersUpsertWithoutUserEstoquesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUserEstoquesInput, UsersUpdateWithoutUserEstoquesInput>, UsersUncheckedUpdateWithoutUserEstoquesInput>
  }

  export type EstoquesUpdateOneRequiredWithoutEstoqueUsersNestedInput = {
    create?: XOR<EstoquesCreateWithoutEstoqueUsersInput, EstoquesUncheckedCreateWithoutEstoqueUsersInput>
    connectOrCreate?: EstoquesCreateOrConnectWithoutEstoqueUsersInput
    upsert?: EstoquesUpsertWithoutEstoqueUsersInput
    connect?: EstoquesWhereUniqueInput
    update?: XOR<XOR<EstoquesUpdateToOneWithWhereWithoutEstoqueUsersInput, EstoquesUpdateWithoutEstoqueUsersInput>, EstoquesUncheckedUpdateWithoutEstoqueUsersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Users_EstoquesCreateWithoutUser_estoqueInput = {
    estoque_user: EstoquesCreateNestedOneWithoutEstoqueUsersInput
  }

  export type Users_EstoquesUncheckedCreateWithoutUser_estoqueInput = {
    idEstoque: number
  }

  export type Users_EstoquesCreateOrConnectWithoutUser_estoqueInput = {
    where: Users_EstoquesWhereUniqueInput
    create: XOR<Users_EstoquesCreateWithoutUser_estoqueInput, Users_EstoquesUncheckedCreateWithoutUser_estoqueInput>
  }

  export type Users_EstoquesCreateManyUser_estoqueInputEnvelope = {
    data: Users_EstoquesCreateManyUser_estoqueInput | Users_EstoquesCreateManyUser_estoqueInput[]
    skipDuplicates?: boolean
  }

  export type Users_EstoquesUpsertWithWhereUniqueWithoutUser_estoqueInput = {
    where: Users_EstoquesWhereUniqueInput
    update: XOR<Users_EstoquesUpdateWithoutUser_estoqueInput, Users_EstoquesUncheckedUpdateWithoutUser_estoqueInput>
    create: XOR<Users_EstoquesCreateWithoutUser_estoqueInput, Users_EstoquesUncheckedCreateWithoutUser_estoqueInput>
  }

  export type Users_EstoquesUpdateWithWhereUniqueWithoutUser_estoqueInput = {
    where: Users_EstoquesWhereUniqueInput
    data: XOR<Users_EstoquesUpdateWithoutUser_estoqueInput, Users_EstoquesUncheckedUpdateWithoutUser_estoqueInput>
  }

  export type Users_EstoquesUpdateManyWithWhereWithoutUser_estoqueInput = {
    where: Users_EstoquesScalarWhereInput
    data: XOR<Users_EstoquesUpdateManyMutationInput, Users_EstoquesUncheckedUpdateManyWithoutUser_estoqueInput>
  }

  export type Users_EstoquesScalarWhereInput = {
    AND?: Users_EstoquesScalarWhereInput | Users_EstoquesScalarWhereInput[]
    OR?: Users_EstoquesScalarWhereInput[]
    NOT?: Users_EstoquesScalarWhereInput | Users_EstoquesScalarWhereInput[]
    idUser?: IntFilter<"Users_Estoques"> | number
    idEstoque?: IntFilter<"Users_Estoques"> | number
  }

  export type ProductCreateWithoutProdutosEstoqueInput = {
    name: string
    categoriaProdutos: string
    sku: string
    descricao?: string | null
    data_de_validade?: Date | string | null
  }

  export type ProductUncheckedCreateWithoutProdutosEstoqueInput = {
    id_Product?: number
    name: string
    categoriaProdutos: string
    sku: string
    descricao?: string | null
    data_de_validade?: Date | string | null
  }

  export type ProductCreateOrConnectWithoutProdutosEstoqueInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProdutosEstoqueInput, ProductUncheckedCreateWithoutProdutosEstoqueInput>
  }

  export type Users_EstoquesCreateWithoutEstoque_userInput = {
    user_estoque: UsersCreateNestedOneWithoutUserEstoquesInput
  }

  export type Users_EstoquesUncheckedCreateWithoutEstoque_userInput = {
    idUser: number
  }

  export type Users_EstoquesCreateOrConnectWithoutEstoque_userInput = {
    where: Users_EstoquesWhereUniqueInput
    create: XOR<Users_EstoquesCreateWithoutEstoque_userInput, Users_EstoquesUncheckedCreateWithoutEstoque_userInput>
  }

  export type Users_EstoquesCreateManyEstoque_userInputEnvelope = {
    data: Users_EstoquesCreateManyEstoque_userInput | Users_EstoquesCreateManyEstoque_userInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutProdutosEstoqueInput = {
    update: XOR<ProductUpdateWithoutProdutosEstoqueInput, ProductUncheckedUpdateWithoutProdutosEstoqueInput>
    create: XOR<ProductCreateWithoutProdutosEstoqueInput, ProductUncheckedCreateWithoutProdutosEstoqueInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProdutosEstoqueInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProdutosEstoqueInput, ProductUncheckedUpdateWithoutProdutosEstoqueInput>
  }

  export type ProductUpdateWithoutProdutosEstoqueInput = {
    name?: StringFieldUpdateOperationsInput | string
    categoriaProdutos?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_de_validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUncheckedUpdateWithoutProdutosEstoqueInput = {
    id_Product?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoriaProdutos?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_de_validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Users_EstoquesUpsertWithWhereUniqueWithoutEstoque_userInput = {
    where: Users_EstoquesWhereUniqueInput
    update: XOR<Users_EstoquesUpdateWithoutEstoque_userInput, Users_EstoquesUncheckedUpdateWithoutEstoque_userInput>
    create: XOR<Users_EstoquesCreateWithoutEstoque_userInput, Users_EstoquesUncheckedCreateWithoutEstoque_userInput>
  }

  export type Users_EstoquesUpdateWithWhereUniqueWithoutEstoque_userInput = {
    where: Users_EstoquesWhereUniqueInput
    data: XOR<Users_EstoquesUpdateWithoutEstoque_userInput, Users_EstoquesUncheckedUpdateWithoutEstoque_userInput>
  }

  export type Users_EstoquesUpdateManyWithWhereWithoutEstoque_userInput = {
    where: Users_EstoquesScalarWhereInput
    data: XOR<Users_EstoquesUpdateManyMutationInput, Users_EstoquesUncheckedUpdateManyWithoutEstoque_userInput>
  }

  export type EstoquesCreateWithoutProdutoInput = {
    estoqueUsers?: Users_EstoquesCreateNestedManyWithoutEstoque_userInput
  }

  export type EstoquesUncheckedCreateWithoutProdutoInput = {
    idEstoque?: number
    estoqueUsers?: Users_EstoquesUncheckedCreateNestedManyWithoutEstoque_userInput
  }

  export type EstoquesCreateOrConnectWithoutProdutoInput = {
    where: EstoquesWhereUniqueInput
    create: XOR<EstoquesCreateWithoutProdutoInput, EstoquesUncheckedCreateWithoutProdutoInput>
  }

  export type EstoquesCreateManyProdutoInputEnvelope = {
    data: EstoquesCreateManyProdutoInput | EstoquesCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type EstoquesUpsertWithWhereUniqueWithoutProdutoInput = {
    where: EstoquesWhereUniqueInput
    update: XOR<EstoquesUpdateWithoutProdutoInput, EstoquesUncheckedUpdateWithoutProdutoInput>
    create: XOR<EstoquesCreateWithoutProdutoInput, EstoquesUncheckedCreateWithoutProdutoInput>
  }

  export type EstoquesUpdateWithWhereUniqueWithoutProdutoInput = {
    where: EstoquesWhereUniqueInput
    data: XOR<EstoquesUpdateWithoutProdutoInput, EstoquesUncheckedUpdateWithoutProdutoInput>
  }

  export type EstoquesUpdateManyWithWhereWithoutProdutoInput = {
    where: EstoquesScalarWhereInput
    data: XOR<EstoquesUpdateManyMutationInput, EstoquesUncheckedUpdateManyWithoutProdutoInput>
  }

  export type EstoquesScalarWhereInput = {
    AND?: EstoquesScalarWhereInput | EstoquesScalarWhereInput[]
    OR?: EstoquesScalarWhereInput[]
    NOT?: EstoquesScalarWhereInput | EstoquesScalarWhereInput[]
    idEstoque?: IntFilter<"Estoques"> | number
    id_Product?: IntFilter<"Estoques"> | number
  }

  export type UsersCreateWithoutUserEstoquesInput = {
    email: string
    name: string
    password: string
  }

  export type UsersUncheckedCreateWithoutUserEstoquesInput = {
    idUser?: number
    email: string
    name: string
    password: string
  }

  export type UsersCreateOrConnectWithoutUserEstoquesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUserEstoquesInput, UsersUncheckedCreateWithoutUserEstoquesInput>
  }

  export type EstoquesCreateWithoutEstoqueUsersInput = {
    produto: ProductCreateNestedOneWithoutProdutosEstoqueInput
  }

  export type EstoquesUncheckedCreateWithoutEstoqueUsersInput = {
    idEstoque?: number
    id_Product: number
  }

  export type EstoquesCreateOrConnectWithoutEstoqueUsersInput = {
    where: EstoquesWhereUniqueInput
    create: XOR<EstoquesCreateWithoutEstoqueUsersInput, EstoquesUncheckedCreateWithoutEstoqueUsersInput>
  }

  export type UsersUpsertWithoutUserEstoquesInput = {
    update: XOR<UsersUpdateWithoutUserEstoquesInput, UsersUncheckedUpdateWithoutUserEstoquesInput>
    create: XOR<UsersCreateWithoutUserEstoquesInput, UsersUncheckedCreateWithoutUserEstoquesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUserEstoquesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUserEstoquesInput, UsersUncheckedUpdateWithoutUserEstoquesInput>
  }

  export type UsersUpdateWithoutUserEstoquesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateWithoutUserEstoquesInput = {
    idUser?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type EstoquesUpsertWithoutEstoqueUsersInput = {
    update: XOR<EstoquesUpdateWithoutEstoqueUsersInput, EstoquesUncheckedUpdateWithoutEstoqueUsersInput>
    create: XOR<EstoquesCreateWithoutEstoqueUsersInput, EstoquesUncheckedCreateWithoutEstoqueUsersInput>
    where?: EstoquesWhereInput
  }

  export type EstoquesUpdateToOneWithWhereWithoutEstoqueUsersInput = {
    where?: EstoquesWhereInput
    data: XOR<EstoquesUpdateWithoutEstoqueUsersInput, EstoquesUncheckedUpdateWithoutEstoqueUsersInput>
  }

  export type EstoquesUpdateWithoutEstoqueUsersInput = {
    produto?: ProductUpdateOneRequiredWithoutProdutosEstoqueNestedInput
  }

  export type EstoquesUncheckedUpdateWithoutEstoqueUsersInput = {
    idEstoque?: IntFieldUpdateOperationsInput | number
    id_Product?: IntFieldUpdateOperationsInput | number
  }

  export type Users_EstoquesCreateManyUser_estoqueInput = {
    idEstoque: number
  }

  export type Users_EstoquesUpdateWithoutUser_estoqueInput = {
    estoque_user?: EstoquesUpdateOneRequiredWithoutEstoqueUsersNestedInput
  }

  export type Users_EstoquesUncheckedUpdateWithoutUser_estoqueInput = {
    idEstoque?: IntFieldUpdateOperationsInput | number
  }

  export type Users_EstoquesUncheckedUpdateManyWithoutUser_estoqueInput = {
    idEstoque?: IntFieldUpdateOperationsInput | number
  }

  export type Users_EstoquesCreateManyEstoque_userInput = {
    idUser: number
  }

  export type Users_EstoquesUpdateWithoutEstoque_userInput = {
    user_estoque?: UsersUpdateOneRequiredWithoutUserEstoquesNestedInput
  }

  export type Users_EstoquesUncheckedUpdateWithoutEstoque_userInput = {
    idUser?: IntFieldUpdateOperationsInput | number
  }

  export type Users_EstoquesUncheckedUpdateManyWithoutEstoque_userInput = {
    idUser?: IntFieldUpdateOperationsInput | number
  }

  export type EstoquesCreateManyProdutoInput = {
    idEstoque?: number
  }

  export type EstoquesUpdateWithoutProdutoInput = {
    estoqueUsers?: Users_EstoquesUpdateManyWithoutEstoque_userNestedInput
  }

  export type EstoquesUncheckedUpdateWithoutProdutoInput = {
    idEstoque?: IntFieldUpdateOperationsInput | number
    estoqueUsers?: Users_EstoquesUncheckedUpdateManyWithoutEstoque_userNestedInput
  }

  export type EstoquesUncheckedUpdateManyWithoutProdutoInput = {
    idEstoque?: IntFieldUpdateOperationsInput | number
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