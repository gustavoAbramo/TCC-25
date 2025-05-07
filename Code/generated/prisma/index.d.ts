
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
 * Model Estacionamentos
 * 
 */
export type Estacionamentos = $Result.DefaultSelection<Prisma.$EstacionamentosPayload>
/**
 * Model Vagas
 * 
 */
export type Vagas = $Result.DefaultSelection<Prisma.$VagasPayload>
/**
 * Model Pagamentos
 * 
 */
export type Pagamentos = $Result.DefaultSelection<Prisma.$PagamentosPayload>

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
   * `prisma.estacionamentos`: Exposes CRUD operations for the **Estacionamentos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estacionamentos
    * const estacionamentos = await prisma.estacionamentos.findMany()
    * ```
    */
  get estacionamentos(): Prisma.EstacionamentosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vagas`: Exposes CRUD operations for the **Vagas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vagases
    * const vagases = await prisma.vagas.findMany()
    * ```
    */
  get vagas(): Prisma.VagasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagamentos`: Exposes CRUD operations for the **Pagamentos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagamentos
    * const pagamentos = await prisma.pagamentos.findMany()
    * ```
    */
  get pagamentos(): Prisma.PagamentosDelegate<ExtArgs, ClientOptions>;
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
    Estacionamentos: 'Estacionamentos',
    Vagas: 'Vagas',
    Pagamentos: 'Pagamentos'
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
      modelProps: "users" | "estacionamentos" | "vagas" | "pagamentos"
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
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
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
      Estacionamentos: {
        payload: Prisma.$EstacionamentosPayload<ExtArgs>
        fields: Prisma.EstacionamentosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstacionamentosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionamentosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstacionamentosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionamentosPayload>
          }
          findFirst: {
            args: Prisma.EstacionamentosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionamentosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstacionamentosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionamentosPayload>
          }
          findMany: {
            args: Prisma.EstacionamentosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionamentosPayload>[]
          }
          create: {
            args: Prisma.EstacionamentosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionamentosPayload>
          }
          createMany: {
            args: Prisma.EstacionamentosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstacionamentosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionamentosPayload>[]
          }
          delete: {
            args: Prisma.EstacionamentosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionamentosPayload>
          }
          update: {
            args: Prisma.EstacionamentosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionamentosPayload>
          }
          deleteMany: {
            args: Prisma.EstacionamentosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstacionamentosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstacionamentosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionamentosPayload>[]
          }
          upsert: {
            args: Prisma.EstacionamentosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstacionamentosPayload>
          }
          aggregate: {
            args: Prisma.EstacionamentosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstacionamentos>
          }
          groupBy: {
            args: Prisma.EstacionamentosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstacionamentosGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstacionamentosCountArgs<ExtArgs>
            result: $Utils.Optional<EstacionamentosCountAggregateOutputType> | number
          }
        }
      }
      Vagas: {
        payload: Prisma.$VagasPayload<ExtArgs>
        fields: Prisma.VagasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VagasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VagasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload>
          }
          findFirst: {
            args: Prisma.VagasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VagasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload>
          }
          findMany: {
            args: Prisma.VagasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload>[]
          }
          create: {
            args: Prisma.VagasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload>
          }
          createMany: {
            args: Prisma.VagasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VagasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload>[]
          }
          delete: {
            args: Prisma.VagasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload>
          }
          update: {
            args: Prisma.VagasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload>
          }
          deleteMany: {
            args: Prisma.VagasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VagasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VagasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload>[]
          }
          upsert: {
            args: Prisma.VagasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagasPayload>
          }
          aggregate: {
            args: Prisma.VagasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVagas>
          }
          groupBy: {
            args: Prisma.VagasGroupByArgs<ExtArgs>
            result: $Utils.Optional<VagasGroupByOutputType>[]
          }
          count: {
            args: Prisma.VagasCountArgs<ExtArgs>
            result: $Utils.Optional<VagasCountAggregateOutputType> | number
          }
        }
      }
      Pagamentos: {
        payload: Prisma.$PagamentosPayload<ExtArgs>
        fields: Prisma.PagamentosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagamentosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagamentosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentosPayload>
          }
          findFirst: {
            args: Prisma.PagamentosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagamentosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentosPayload>
          }
          findMany: {
            args: Prisma.PagamentosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentosPayload>[]
          }
          create: {
            args: Prisma.PagamentosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentosPayload>
          }
          createMany: {
            args: Prisma.PagamentosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagamentosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentosPayload>[]
          }
          delete: {
            args: Prisma.PagamentosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentosPayload>
          }
          update: {
            args: Prisma.PagamentosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentosPayload>
          }
          deleteMany: {
            args: Prisma.PagamentosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagamentosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PagamentosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentosPayload>[]
          }
          upsert: {
            args: Prisma.PagamentosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentosPayload>
          }
          aggregate: {
            args: Prisma.PagamentosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagamentos>
          }
          groupBy: {
            args: Prisma.PagamentosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagamentosGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagamentosCountArgs<ExtArgs>
            result: $Utils.Optional<PagamentosCountAggregateOutputType> | number
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
    estacionamentos?: EstacionamentosOmit
    vagas?: VagasOmit
    pagamentos?: PagamentosOmit
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
    pagamentos: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamentos?: boolean | UsersCountOutputTypeCountPagamentosArgs
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
  export type UsersCountOutputTypeCountPagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentosWhereInput
  }


  /**
   * Count Type EstacionamentosCountOutputType
   */

  export type EstacionamentosCountOutputType = {
    vagas: number
  }

  export type EstacionamentosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vagas?: boolean | EstacionamentosCountOutputTypeCountVagasArgs
  }

  // Custom InputTypes
  /**
   * EstacionamentosCountOutputType without action
   */
  export type EstacionamentosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstacionamentosCountOutputType
     */
    select?: EstacionamentosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstacionamentosCountOutputType without action
   */
  export type EstacionamentosCountOutputTypeCountVagasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VagasWhereInput
  }


  /**
   * Count Type VagasCountOutputType
   */

  export type VagasCountOutputType = {
    pagamentos: number
  }

  export type VagasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamentos?: boolean | VagasCountOutputTypeCountPagamentosArgs
  }

  // Custom InputTypes
  /**
   * VagasCountOutputType without action
   */
  export type VagasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VagasCountOutputType
     */
    select?: VagasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VagasCountOutputType without action
   */
  export type VagasCountOutputTypeCountPagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentosWhereInput
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
    pagamentos?: boolean | Users$pagamentosArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUser?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUser?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    idUser?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idUser" | "email" | "name" | "password", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamentos?: boolean | Users$pagamentosArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      pagamentos: Prisma.$PagamentosPayload<ExtArgs>[]
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
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `idUser`
     * const usersWithIdUserOnly = await prisma.users.createManyAndReturn({
     *   select: { idUser: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `idUser`
     * const usersWithIdUserOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    pagamentos<T extends Users$pagamentosArgs<ExtArgs> = {}>(args?: Subset<T, Users$pagamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
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
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
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
   * Users.pagamentos
   */
  export type Users$pagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamentos
     */
    select?: PagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamentos
     */
    omit?: PagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentosInclude<ExtArgs> | null
    where?: PagamentosWhereInput
    orderBy?: PagamentosOrderByWithRelationInput | PagamentosOrderByWithRelationInput[]
    cursor?: PagamentosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentosScalarFieldEnum | PagamentosScalarFieldEnum[]
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
   * Model Estacionamentos
   */

  export type AggregateEstacionamentos = {
    _count: EstacionamentosCountAggregateOutputType | null
    _avg: EstacionamentosAvgAggregateOutputType | null
    _sum: EstacionamentosSumAggregateOutputType | null
    _min: EstacionamentosMinAggregateOutputType | null
    _max: EstacionamentosMaxAggregateOutputType | null
  }

  export type EstacionamentosAvgAggregateOutputType = {
    id_estacionamento: number | null
    qtd_vagas: number | null
  }

  export type EstacionamentosSumAggregateOutputType = {
    id_estacionamento: number | null
    qtd_vagas: number | null
  }

  export type EstacionamentosMinAggregateOutputType = {
    id_estacionamento: number | null
    nome: string | null
    endereco: string | null
    qtd_vagas: number | null
  }

  export type EstacionamentosMaxAggregateOutputType = {
    id_estacionamento: number | null
    nome: string | null
    endereco: string | null
    qtd_vagas: number | null
  }

  export type EstacionamentosCountAggregateOutputType = {
    id_estacionamento: number
    nome: number
    endereco: number
    qtd_vagas: number
    _all: number
  }


  export type EstacionamentosAvgAggregateInputType = {
    id_estacionamento?: true
    qtd_vagas?: true
  }

  export type EstacionamentosSumAggregateInputType = {
    id_estacionamento?: true
    qtd_vagas?: true
  }

  export type EstacionamentosMinAggregateInputType = {
    id_estacionamento?: true
    nome?: true
    endereco?: true
    qtd_vagas?: true
  }

  export type EstacionamentosMaxAggregateInputType = {
    id_estacionamento?: true
    nome?: true
    endereco?: true
    qtd_vagas?: true
  }

  export type EstacionamentosCountAggregateInputType = {
    id_estacionamento?: true
    nome?: true
    endereco?: true
    qtd_vagas?: true
    _all?: true
  }

  export type EstacionamentosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estacionamentos to aggregate.
     */
    where?: EstacionamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estacionamentos to fetch.
     */
    orderBy?: EstacionamentosOrderByWithRelationInput | EstacionamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstacionamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estacionamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estacionamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estacionamentos
    **/
    _count?: true | EstacionamentosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstacionamentosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstacionamentosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstacionamentosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstacionamentosMaxAggregateInputType
  }

  export type GetEstacionamentosAggregateType<T extends EstacionamentosAggregateArgs> = {
        [P in keyof T & keyof AggregateEstacionamentos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstacionamentos[P]>
      : GetScalarType<T[P], AggregateEstacionamentos[P]>
  }




  export type EstacionamentosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstacionamentosWhereInput
    orderBy?: EstacionamentosOrderByWithAggregationInput | EstacionamentosOrderByWithAggregationInput[]
    by: EstacionamentosScalarFieldEnum[] | EstacionamentosScalarFieldEnum
    having?: EstacionamentosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstacionamentosCountAggregateInputType | true
    _avg?: EstacionamentosAvgAggregateInputType
    _sum?: EstacionamentosSumAggregateInputType
    _min?: EstacionamentosMinAggregateInputType
    _max?: EstacionamentosMaxAggregateInputType
  }

  export type EstacionamentosGroupByOutputType = {
    id_estacionamento: number
    nome: string
    endereco: string
    qtd_vagas: number
    _count: EstacionamentosCountAggregateOutputType | null
    _avg: EstacionamentosAvgAggregateOutputType | null
    _sum: EstacionamentosSumAggregateOutputType | null
    _min: EstacionamentosMinAggregateOutputType | null
    _max: EstacionamentosMaxAggregateOutputType | null
  }

  type GetEstacionamentosGroupByPayload<T extends EstacionamentosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstacionamentosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstacionamentosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstacionamentosGroupByOutputType[P]>
            : GetScalarType<T[P], EstacionamentosGroupByOutputType[P]>
        }
      >
    >


  export type EstacionamentosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estacionamento?: boolean
    nome?: boolean
    endereco?: boolean
    qtd_vagas?: boolean
    vagas?: boolean | Estacionamentos$vagasArgs<ExtArgs>
    _count?: boolean | EstacionamentosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estacionamentos"]>

  export type EstacionamentosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estacionamento?: boolean
    nome?: boolean
    endereco?: boolean
    qtd_vagas?: boolean
  }, ExtArgs["result"]["estacionamentos"]>

  export type EstacionamentosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estacionamento?: boolean
    nome?: boolean
    endereco?: boolean
    qtd_vagas?: boolean
  }, ExtArgs["result"]["estacionamentos"]>

  export type EstacionamentosSelectScalar = {
    id_estacionamento?: boolean
    nome?: boolean
    endereco?: boolean
    qtd_vagas?: boolean
  }

  export type EstacionamentosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_estacionamento" | "nome" | "endereco" | "qtd_vagas", ExtArgs["result"]["estacionamentos"]>
  export type EstacionamentosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vagas?: boolean | Estacionamentos$vagasArgs<ExtArgs>
    _count?: boolean | EstacionamentosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstacionamentosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EstacionamentosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EstacionamentosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estacionamentos"
    objects: {
      vagas: Prisma.$VagasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_estacionamento: number
      nome: string
      endereco: string
      qtd_vagas: number
    }, ExtArgs["result"]["estacionamentos"]>
    composites: {}
  }

  type EstacionamentosGetPayload<S extends boolean | null | undefined | EstacionamentosDefaultArgs> = $Result.GetResult<Prisma.$EstacionamentosPayload, S>

  type EstacionamentosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstacionamentosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstacionamentosCountAggregateInputType | true
    }

  export interface EstacionamentosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estacionamentos'], meta: { name: 'Estacionamentos' } }
    /**
     * Find zero or one Estacionamentos that matches the filter.
     * @param {EstacionamentosFindUniqueArgs} args - Arguments to find a Estacionamentos
     * @example
     * // Get one Estacionamentos
     * const estacionamentos = await prisma.estacionamentos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstacionamentosFindUniqueArgs>(args: SelectSubset<T, EstacionamentosFindUniqueArgs<ExtArgs>>): Prisma__EstacionamentosClient<$Result.GetResult<Prisma.$EstacionamentosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estacionamentos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstacionamentosFindUniqueOrThrowArgs} args - Arguments to find a Estacionamentos
     * @example
     * // Get one Estacionamentos
     * const estacionamentos = await prisma.estacionamentos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstacionamentosFindUniqueOrThrowArgs>(args: SelectSubset<T, EstacionamentosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstacionamentosClient<$Result.GetResult<Prisma.$EstacionamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estacionamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstacionamentosFindFirstArgs} args - Arguments to find a Estacionamentos
     * @example
     * // Get one Estacionamentos
     * const estacionamentos = await prisma.estacionamentos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstacionamentosFindFirstArgs>(args?: SelectSubset<T, EstacionamentosFindFirstArgs<ExtArgs>>): Prisma__EstacionamentosClient<$Result.GetResult<Prisma.$EstacionamentosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estacionamentos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstacionamentosFindFirstOrThrowArgs} args - Arguments to find a Estacionamentos
     * @example
     * // Get one Estacionamentos
     * const estacionamentos = await prisma.estacionamentos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstacionamentosFindFirstOrThrowArgs>(args?: SelectSubset<T, EstacionamentosFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstacionamentosClient<$Result.GetResult<Prisma.$EstacionamentosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estacionamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstacionamentosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estacionamentos
     * const estacionamentos = await prisma.estacionamentos.findMany()
     * 
     * // Get first 10 Estacionamentos
     * const estacionamentos = await prisma.estacionamentos.findMany({ take: 10 })
     * 
     * // Only select the `id_estacionamento`
     * const estacionamentosWithId_estacionamentoOnly = await prisma.estacionamentos.findMany({ select: { id_estacionamento: true } })
     * 
     */
    findMany<T extends EstacionamentosFindManyArgs>(args?: SelectSubset<T, EstacionamentosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstacionamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estacionamentos.
     * @param {EstacionamentosCreateArgs} args - Arguments to create a Estacionamentos.
     * @example
     * // Create one Estacionamentos
     * const Estacionamentos = await prisma.estacionamentos.create({
     *   data: {
     *     // ... data to create a Estacionamentos
     *   }
     * })
     * 
     */
    create<T extends EstacionamentosCreateArgs>(args: SelectSubset<T, EstacionamentosCreateArgs<ExtArgs>>): Prisma__EstacionamentosClient<$Result.GetResult<Prisma.$EstacionamentosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estacionamentos.
     * @param {EstacionamentosCreateManyArgs} args - Arguments to create many Estacionamentos.
     * @example
     * // Create many Estacionamentos
     * const estacionamentos = await prisma.estacionamentos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstacionamentosCreateManyArgs>(args?: SelectSubset<T, EstacionamentosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estacionamentos and returns the data saved in the database.
     * @param {EstacionamentosCreateManyAndReturnArgs} args - Arguments to create many Estacionamentos.
     * @example
     * // Create many Estacionamentos
     * const estacionamentos = await prisma.estacionamentos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estacionamentos and only return the `id_estacionamento`
     * const estacionamentosWithId_estacionamentoOnly = await prisma.estacionamentos.createManyAndReturn({
     *   select: { id_estacionamento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstacionamentosCreateManyAndReturnArgs>(args?: SelectSubset<T, EstacionamentosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstacionamentosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estacionamentos.
     * @param {EstacionamentosDeleteArgs} args - Arguments to delete one Estacionamentos.
     * @example
     * // Delete one Estacionamentos
     * const Estacionamentos = await prisma.estacionamentos.delete({
     *   where: {
     *     // ... filter to delete one Estacionamentos
     *   }
     * })
     * 
     */
    delete<T extends EstacionamentosDeleteArgs>(args: SelectSubset<T, EstacionamentosDeleteArgs<ExtArgs>>): Prisma__EstacionamentosClient<$Result.GetResult<Prisma.$EstacionamentosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estacionamentos.
     * @param {EstacionamentosUpdateArgs} args - Arguments to update one Estacionamentos.
     * @example
     * // Update one Estacionamentos
     * const estacionamentos = await prisma.estacionamentos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstacionamentosUpdateArgs>(args: SelectSubset<T, EstacionamentosUpdateArgs<ExtArgs>>): Prisma__EstacionamentosClient<$Result.GetResult<Prisma.$EstacionamentosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estacionamentos.
     * @param {EstacionamentosDeleteManyArgs} args - Arguments to filter Estacionamentos to delete.
     * @example
     * // Delete a few Estacionamentos
     * const { count } = await prisma.estacionamentos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstacionamentosDeleteManyArgs>(args?: SelectSubset<T, EstacionamentosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estacionamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstacionamentosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estacionamentos
     * const estacionamentos = await prisma.estacionamentos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstacionamentosUpdateManyArgs>(args: SelectSubset<T, EstacionamentosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estacionamentos and returns the data updated in the database.
     * @param {EstacionamentosUpdateManyAndReturnArgs} args - Arguments to update many Estacionamentos.
     * @example
     * // Update many Estacionamentos
     * const estacionamentos = await prisma.estacionamentos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estacionamentos and only return the `id_estacionamento`
     * const estacionamentosWithId_estacionamentoOnly = await prisma.estacionamentos.updateManyAndReturn({
     *   select: { id_estacionamento: true },
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
    updateManyAndReturn<T extends EstacionamentosUpdateManyAndReturnArgs>(args: SelectSubset<T, EstacionamentosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstacionamentosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estacionamentos.
     * @param {EstacionamentosUpsertArgs} args - Arguments to update or create a Estacionamentos.
     * @example
     * // Update or create a Estacionamentos
     * const estacionamentos = await prisma.estacionamentos.upsert({
     *   create: {
     *     // ... data to create a Estacionamentos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estacionamentos we want to update
     *   }
     * })
     */
    upsert<T extends EstacionamentosUpsertArgs>(args: SelectSubset<T, EstacionamentosUpsertArgs<ExtArgs>>): Prisma__EstacionamentosClient<$Result.GetResult<Prisma.$EstacionamentosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estacionamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstacionamentosCountArgs} args - Arguments to filter Estacionamentos to count.
     * @example
     * // Count the number of Estacionamentos
     * const count = await prisma.estacionamentos.count({
     *   where: {
     *     // ... the filter for the Estacionamentos we want to count
     *   }
     * })
    **/
    count<T extends EstacionamentosCountArgs>(
      args?: Subset<T, EstacionamentosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstacionamentosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estacionamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstacionamentosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstacionamentosAggregateArgs>(args: Subset<T, EstacionamentosAggregateArgs>): Prisma.PrismaPromise<GetEstacionamentosAggregateType<T>>

    /**
     * Group by Estacionamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstacionamentosGroupByArgs} args - Group by arguments.
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
      T extends EstacionamentosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstacionamentosGroupByArgs['orderBy'] }
        : { orderBy?: EstacionamentosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstacionamentosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstacionamentosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estacionamentos model
   */
  readonly fields: EstacionamentosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estacionamentos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstacionamentosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vagas<T extends Estacionamentos$vagasArgs<ExtArgs> = {}>(args?: Subset<T, Estacionamentos$vagasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Estacionamentos model
   */
  interface EstacionamentosFieldRefs {
    readonly id_estacionamento: FieldRef<"Estacionamentos", 'Int'>
    readonly nome: FieldRef<"Estacionamentos", 'String'>
    readonly endereco: FieldRef<"Estacionamentos", 'String'>
    readonly qtd_vagas: FieldRef<"Estacionamentos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Estacionamentos findUnique
   */
  export type EstacionamentosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacionamentos
     */
    select?: EstacionamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacionamentos
     */
    omit?: EstacionamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionamentosInclude<ExtArgs> | null
    /**
     * Filter, which Estacionamentos to fetch.
     */
    where: EstacionamentosWhereUniqueInput
  }

  /**
   * Estacionamentos findUniqueOrThrow
   */
  export type EstacionamentosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacionamentos
     */
    select?: EstacionamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacionamentos
     */
    omit?: EstacionamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionamentosInclude<ExtArgs> | null
    /**
     * Filter, which Estacionamentos to fetch.
     */
    where: EstacionamentosWhereUniqueInput
  }

  /**
   * Estacionamentos findFirst
   */
  export type EstacionamentosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacionamentos
     */
    select?: EstacionamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacionamentos
     */
    omit?: EstacionamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionamentosInclude<ExtArgs> | null
    /**
     * Filter, which Estacionamentos to fetch.
     */
    where?: EstacionamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estacionamentos to fetch.
     */
    orderBy?: EstacionamentosOrderByWithRelationInput | EstacionamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estacionamentos.
     */
    cursor?: EstacionamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estacionamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estacionamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estacionamentos.
     */
    distinct?: EstacionamentosScalarFieldEnum | EstacionamentosScalarFieldEnum[]
  }

  /**
   * Estacionamentos findFirstOrThrow
   */
  export type EstacionamentosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacionamentos
     */
    select?: EstacionamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacionamentos
     */
    omit?: EstacionamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionamentosInclude<ExtArgs> | null
    /**
     * Filter, which Estacionamentos to fetch.
     */
    where?: EstacionamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estacionamentos to fetch.
     */
    orderBy?: EstacionamentosOrderByWithRelationInput | EstacionamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estacionamentos.
     */
    cursor?: EstacionamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estacionamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estacionamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estacionamentos.
     */
    distinct?: EstacionamentosScalarFieldEnum | EstacionamentosScalarFieldEnum[]
  }

  /**
   * Estacionamentos findMany
   */
  export type EstacionamentosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacionamentos
     */
    select?: EstacionamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacionamentos
     */
    omit?: EstacionamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionamentosInclude<ExtArgs> | null
    /**
     * Filter, which Estacionamentos to fetch.
     */
    where?: EstacionamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estacionamentos to fetch.
     */
    orderBy?: EstacionamentosOrderByWithRelationInput | EstacionamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estacionamentos.
     */
    cursor?: EstacionamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estacionamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estacionamentos.
     */
    skip?: number
    distinct?: EstacionamentosScalarFieldEnum | EstacionamentosScalarFieldEnum[]
  }

  /**
   * Estacionamentos create
   */
  export type EstacionamentosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacionamentos
     */
    select?: EstacionamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacionamentos
     */
    omit?: EstacionamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionamentosInclude<ExtArgs> | null
    /**
     * The data needed to create a Estacionamentos.
     */
    data: XOR<EstacionamentosCreateInput, EstacionamentosUncheckedCreateInput>
  }

  /**
   * Estacionamentos createMany
   */
  export type EstacionamentosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estacionamentos.
     */
    data: EstacionamentosCreateManyInput | EstacionamentosCreateManyInput[]
  }

  /**
   * Estacionamentos createManyAndReturn
   */
  export type EstacionamentosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacionamentos
     */
    select?: EstacionamentosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estacionamentos
     */
    omit?: EstacionamentosOmit<ExtArgs> | null
    /**
     * The data used to create many Estacionamentos.
     */
    data: EstacionamentosCreateManyInput | EstacionamentosCreateManyInput[]
  }

  /**
   * Estacionamentos update
   */
  export type EstacionamentosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacionamentos
     */
    select?: EstacionamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacionamentos
     */
    omit?: EstacionamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionamentosInclude<ExtArgs> | null
    /**
     * The data needed to update a Estacionamentos.
     */
    data: XOR<EstacionamentosUpdateInput, EstacionamentosUncheckedUpdateInput>
    /**
     * Choose, which Estacionamentos to update.
     */
    where: EstacionamentosWhereUniqueInput
  }

  /**
   * Estacionamentos updateMany
   */
  export type EstacionamentosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estacionamentos.
     */
    data: XOR<EstacionamentosUpdateManyMutationInput, EstacionamentosUncheckedUpdateManyInput>
    /**
     * Filter which Estacionamentos to update
     */
    where?: EstacionamentosWhereInput
    /**
     * Limit how many Estacionamentos to update.
     */
    limit?: number
  }

  /**
   * Estacionamentos updateManyAndReturn
   */
  export type EstacionamentosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacionamentos
     */
    select?: EstacionamentosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estacionamentos
     */
    omit?: EstacionamentosOmit<ExtArgs> | null
    /**
     * The data used to update Estacionamentos.
     */
    data: XOR<EstacionamentosUpdateManyMutationInput, EstacionamentosUncheckedUpdateManyInput>
    /**
     * Filter which Estacionamentos to update
     */
    where?: EstacionamentosWhereInput
    /**
     * Limit how many Estacionamentos to update.
     */
    limit?: number
  }

  /**
   * Estacionamentos upsert
   */
  export type EstacionamentosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacionamentos
     */
    select?: EstacionamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacionamentos
     */
    omit?: EstacionamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionamentosInclude<ExtArgs> | null
    /**
     * The filter to search for the Estacionamentos to update in case it exists.
     */
    where: EstacionamentosWhereUniqueInput
    /**
     * In case the Estacionamentos found by the `where` argument doesn't exist, create a new Estacionamentos with this data.
     */
    create: XOR<EstacionamentosCreateInput, EstacionamentosUncheckedCreateInput>
    /**
     * In case the Estacionamentos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstacionamentosUpdateInput, EstacionamentosUncheckedUpdateInput>
  }

  /**
   * Estacionamentos delete
   */
  export type EstacionamentosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacionamentos
     */
    select?: EstacionamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacionamentos
     */
    omit?: EstacionamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionamentosInclude<ExtArgs> | null
    /**
     * Filter which Estacionamentos to delete.
     */
    where: EstacionamentosWhereUniqueInput
  }

  /**
   * Estacionamentos deleteMany
   */
  export type EstacionamentosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estacionamentos to delete
     */
    where?: EstacionamentosWhereInput
    /**
     * Limit how many Estacionamentos to delete.
     */
    limit?: number
  }

  /**
   * Estacionamentos.vagas
   */
  export type Estacionamentos$vagasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    where?: VagasWhereInput
    orderBy?: VagasOrderByWithRelationInput | VagasOrderByWithRelationInput[]
    cursor?: VagasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VagasScalarFieldEnum | VagasScalarFieldEnum[]
  }

  /**
   * Estacionamentos without action
   */
  export type EstacionamentosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estacionamentos
     */
    select?: EstacionamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estacionamentos
     */
    omit?: EstacionamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstacionamentosInclude<ExtArgs> | null
  }


  /**
   * Model Vagas
   */

  export type AggregateVagas = {
    _count: VagasCountAggregateOutputType | null
    _avg: VagasAvgAggregateOutputType | null
    _sum: VagasSumAggregateOutputType | null
    _min: VagasMinAggregateOutputType | null
    _max: VagasMaxAggregateOutputType | null
  }

  export type VagasAvgAggregateOutputType = {
    id_vaga: number | null
    id_estacionamento: number | null
  }

  export type VagasSumAggregateOutputType = {
    id_vaga: number | null
    id_estacionamento: number | null
  }

  export type VagasMinAggregateOutputType = {
    id_vaga: number | null
    id_estacionamento: number | null
    status_vaga: string | null
  }

  export type VagasMaxAggregateOutputType = {
    id_vaga: number | null
    id_estacionamento: number | null
    status_vaga: string | null
  }

  export type VagasCountAggregateOutputType = {
    id_vaga: number
    id_estacionamento: number
    status_vaga: number
    _all: number
  }


  export type VagasAvgAggregateInputType = {
    id_vaga?: true
    id_estacionamento?: true
  }

  export type VagasSumAggregateInputType = {
    id_vaga?: true
    id_estacionamento?: true
  }

  export type VagasMinAggregateInputType = {
    id_vaga?: true
    id_estacionamento?: true
    status_vaga?: true
  }

  export type VagasMaxAggregateInputType = {
    id_vaga?: true
    id_estacionamento?: true
    status_vaga?: true
  }

  export type VagasCountAggregateInputType = {
    id_vaga?: true
    id_estacionamento?: true
    status_vaga?: true
    _all?: true
  }

  export type VagasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vagas to aggregate.
     */
    where?: VagasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vagases to fetch.
     */
    orderBy?: VagasOrderByWithRelationInput | VagasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VagasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vagases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vagases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vagases
    **/
    _count?: true | VagasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VagasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VagasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VagasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VagasMaxAggregateInputType
  }

  export type GetVagasAggregateType<T extends VagasAggregateArgs> = {
        [P in keyof T & keyof AggregateVagas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVagas[P]>
      : GetScalarType<T[P], AggregateVagas[P]>
  }




  export type VagasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VagasWhereInput
    orderBy?: VagasOrderByWithAggregationInput | VagasOrderByWithAggregationInput[]
    by: VagasScalarFieldEnum[] | VagasScalarFieldEnum
    having?: VagasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VagasCountAggregateInputType | true
    _avg?: VagasAvgAggregateInputType
    _sum?: VagasSumAggregateInputType
    _min?: VagasMinAggregateInputType
    _max?: VagasMaxAggregateInputType
  }

  export type VagasGroupByOutputType = {
    id_vaga: number
    id_estacionamento: number
    status_vaga: string
    _count: VagasCountAggregateOutputType | null
    _avg: VagasAvgAggregateOutputType | null
    _sum: VagasSumAggregateOutputType | null
    _min: VagasMinAggregateOutputType | null
    _max: VagasMaxAggregateOutputType | null
  }

  type GetVagasGroupByPayload<T extends VagasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VagasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VagasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VagasGroupByOutputType[P]>
            : GetScalarType<T[P], VagasGroupByOutputType[P]>
        }
      >
    >


  export type VagasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_vaga?: boolean
    id_estacionamento?: boolean
    status_vaga?: boolean
    pagamentos?: boolean | Vagas$pagamentosArgs<ExtArgs>
    estacionamento?: boolean | EstacionamentosDefaultArgs<ExtArgs>
    _count?: boolean | VagasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vagas"]>

  export type VagasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_vaga?: boolean
    id_estacionamento?: boolean
    status_vaga?: boolean
    estacionamento?: boolean | EstacionamentosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vagas"]>

  export type VagasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_vaga?: boolean
    id_estacionamento?: boolean
    status_vaga?: boolean
    estacionamento?: boolean | EstacionamentosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vagas"]>

  export type VagasSelectScalar = {
    id_vaga?: boolean
    id_estacionamento?: boolean
    status_vaga?: boolean
  }

  export type VagasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_vaga" | "id_estacionamento" | "status_vaga", ExtArgs["result"]["vagas"]>
  export type VagasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamentos?: boolean | Vagas$pagamentosArgs<ExtArgs>
    estacionamento?: boolean | EstacionamentosDefaultArgs<ExtArgs>
    _count?: boolean | VagasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VagasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estacionamento?: boolean | EstacionamentosDefaultArgs<ExtArgs>
  }
  export type VagasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estacionamento?: boolean | EstacionamentosDefaultArgs<ExtArgs>
  }

  export type $VagasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vagas"
    objects: {
      pagamentos: Prisma.$PagamentosPayload<ExtArgs>[]
      estacionamento: Prisma.$EstacionamentosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_vaga: number
      id_estacionamento: number
      status_vaga: string
    }, ExtArgs["result"]["vagas"]>
    composites: {}
  }

  type VagasGetPayload<S extends boolean | null | undefined | VagasDefaultArgs> = $Result.GetResult<Prisma.$VagasPayload, S>

  type VagasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VagasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VagasCountAggregateInputType | true
    }

  export interface VagasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vagas'], meta: { name: 'Vagas' } }
    /**
     * Find zero or one Vagas that matches the filter.
     * @param {VagasFindUniqueArgs} args - Arguments to find a Vagas
     * @example
     * // Get one Vagas
     * const vagas = await prisma.vagas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VagasFindUniqueArgs>(args: SelectSubset<T, VagasFindUniqueArgs<ExtArgs>>): Prisma__VagasClient<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vagas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VagasFindUniqueOrThrowArgs} args - Arguments to find a Vagas
     * @example
     * // Get one Vagas
     * const vagas = await prisma.vagas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VagasFindUniqueOrThrowArgs>(args: SelectSubset<T, VagasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VagasClient<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vagas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagasFindFirstArgs} args - Arguments to find a Vagas
     * @example
     * // Get one Vagas
     * const vagas = await prisma.vagas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VagasFindFirstArgs>(args?: SelectSubset<T, VagasFindFirstArgs<ExtArgs>>): Prisma__VagasClient<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vagas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagasFindFirstOrThrowArgs} args - Arguments to find a Vagas
     * @example
     * // Get one Vagas
     * const vagas = await prisma.vagas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VagasFindFirstOrThrowArgs>(args?: SelectSubset<T, VagasFindFirstOrThrowArgs<ExtArgs>>): Prisma__VagasClient<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vagases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vagases
     * const vagases = await prisma.vagas.findMany()
     * 
     * // Get first 10 Vagases
     * const vagases = await prisma.vagas.findMany({ take: 10 })
     * 
     * // Only select the `id_vaga`
     * const vagasWithId_vagaOnly = await prisma.vagas.findMany({ select: { id_vaga: true } })
     * 
     */
    findMany<T extends VagasFindManyArgs>(args?: SelectSubset<T, VagasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vagas.
     * @param {VagasCreateArgs} args - Arguments to create a Vagas.
     * @example
     * // Create one Vagas
     * const Vagas = await prisma.vagas.create({
     *   data: {
     *     // ... data to create a Vagas
     *   }
     * })
     * 
     */
    create<T extends VagasCreateArgs>(args: SelectSubset<T, VagasCreateArgs<ExtArgs>>): Prisma__VagasClient<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vagases.
     * @param {VagasCreateManyArgs} args - Arguments to create many Vagases.
     * @example
     * // Create many Vagases
     * const vagas = await prisma.vagas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VagasCreateManyArgs>(args?: SelectSubset<T, VagasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vagases and returns the data saved in the database.
     * @param {VagasCreateManyAndReturnArgs} args - Arguments to create many Vagases.
     * @example
     * // Create many Vagases
     * const vagas = await prisma.vagas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vagases and only return the `id_vaga`
     * const vagasWithId_vagaOnly = await prisma.vagas.createManyAndReturn({
     *   select: { id_vaga: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VagasCreateManyAndReturnArgs>(args?: SelectSubset<T, VagasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vagas.
     * @param {VagasDeleteArgs} args - Arguments to delete one Vagas.
     * @example
     * // Delete one Vagas
     * const Vagas = await prisma.vagas.delete({
     *   where: {
     *     // ... filter to delete one Vagas
     *   }
     * })
     * 
     */
    delete<T extends VagasDeleteArgs>(args: SelectSubset<T, VagasDeleteArgs<ExtArgs>>): Prisma__VagasClient<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vagas.
     * @param {VagasUpdateArgs} args - Arguments to update one Vagas.
     * @example
     * // Update one Vagas
     * const vagas = await prisma.vagas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VagasUpdateArgs>(args: SelectSubset<T, VagasUpdateArgs<ExtArgs>>): Prisma__VagasClient<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vagases.
     * @param {VagasDeleteManyArgs} args - Arguments to filter Vagases to delete.
     * @example
     * // Delete a few Vagases
     * const { count } = await prisma.vagas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VagasDeleteManyArgs>(args?: SelectSubset<T, VagasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vagases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vagases
     * const vagas = await prisma.vagas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VagasUpdateManyArgs>(args: SelectSubset<T, VagasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vagases and returns the data updated in the database.
     * @param {VagasUpdateManyAndReturnArgs} args - Arguments to update many Vagases.
     * @example
     * // Update many Vagases
     * const vagas = await prisma.vagas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vagases and only return the `id_vaga`
     * const vagasWithId_vagaOnly = await prisma.vagas.updateManyAndReturn({
     *   select: { id_vaga: true },
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
    updateManyAndReturn<T extends VagasUpdateManyAndReturnArgs>(args: SelectSubset<T, VagasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vagas.
     * @param {VagasUpsertArgs} args - Arguments to update or create a Vagas.
     * @example
     * // Update or create a Vagas
     * const vagas = await prisma.vagas.upsert({
     *   create: {
     *     // ... data to create a Vagas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vagas we want to update
     *   }
     * })
     */
    upsert<T extends VagasUpsertArgs>(args: SelectSubset<T, VagasUpsertArgs<ExtArgs>>): Prisma__VagasClient<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vagases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagasCountArgs} args - Arguments to filter Vagases to count.
     * @example
     * // Count the number of Vagases
     * const count = await prisma.vagas.count({
     *   where: {
     *     // ... the filter for the Vagases we want to count
     *   }
     * })
    **/
    count<T extends VagasCountArgs>(
      args?: Subset<T, VagasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VagasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vagas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VagasAggregateArgs>(args: Subset<T, VagasAggregateArgs>): Prisma.PrismaPromise<GetVagasAggregateType<T>>

    /**
     * Group by Vagas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagasGroupByArgs} args - Group by arguments.
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
      T extends VagasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VagasGroupByArgs['orderBy'] }
        : { orderBy?: VagasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VagasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVagasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vagas model
   */
  readonly fields: VagasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vagas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VagasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pagamentos<T extends Vagas$pagamentosArgs<ExtArgs> = {}>(args?: Subset<T, Vagas$pagamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estacionamento<T extends EstacionamentosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstacionamentosDefaultArgs<ExtArgs>>): Prisma__EstacionamentosClient<$Result.GetResult<Prisma.$EstacionamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Vagas model
   */
  interface VagasFieldRefs {
    readonly id_vaga: FieldRef<"Vagas", 'Int'>
    readonly id_estacionamento: FieldRef<"Vagas", 'Int'>
    readonly status_vaga: FieldRef<"Vagas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vagas findUnique
   */
  export type VagasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    /**
     * Filter, which Vagas to fetch.
     */
    where: VagasWhereUniqueInput
  }

  /**
   * Vagas findUniqueOrThrow
   */
  export type VagasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    /**
     * Filter, which Vagas to fetch.
     */
    where: VagasWhereUniqueInput
  }

  /**
   * Vagas findFirst
   */
  export type VagasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    /**
     * Filter, which Vagas to fetch.
     */
    where?: VagasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vagases to fetch.
     */
    orderBy?: VagasOrderByWithRelationInput | VagasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vagases.
     */
    cursor?: VagasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vagases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vagases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vagases.
     */
    distinct?: VagasScalarFieldEnum | VagasScalarFieldEnum[]
  }

  /**
   * Vagas findFirstOrThrow
   */
  export type VagasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    /**
     * Filter, which Vagas to fetch.
     */
    where?: VagasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vagases to fetch.
     */
    orderBy?: VagasOrderByWithRelationInput | VagasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vagases.
     */
    cursor?: VagasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vagases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vagases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vagases.
     */
    distinct?: VagasScalarFieldEnum | VagasScalarFieldEnum[]
  }

  /**
   * Vagas findMany
   */
  export type VagasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    /**
     * Filter, which Vagases to fetch.
     */
    where?: VagasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vagases to fetch.
     */
    orderBy?: VagasOrderByWithRelationInput | VagasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vagases.
     */
    cursor?: VagasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vagases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vagases.
     */
    skip?: number
    distinct?: VagasScalarFieldEnum | VagasScalarFieldEnum[]
  }

  /**
   * Vagas create
   */
  export type VagasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    /**
     * The data needed to create a Vagas.
     */
    data: XOR<VagasCreateInput, VagasUncheckedCreateInput>
  }

  /**
   * Vagas createMany
   */
  export type VagasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vagases.
     */
    data: VagasCreateManyInput | VagasCreateManyInput[]
  }

  /**
   * Vagas createManyAndReturn
   */
  export type VagasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * The data used to create many Vagases.
     */
    data: VagasCreateManyInput | VagasCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vagas update
   */
  export type VagasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    /**
     * The data needed to update a Vagas.
     */
    data: XOR<VagasUpdateInput, VagasUncheckedUpdateInput>
    /**
     * Choose, which Vagas to update.
     */
    where: VagasWhereUniqueInput
  }

  /**
   * Vagas updateMany
   */
  export type VagasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vagases.
     */
    data: XOR<VagasUpdateManyMutationInput, VagasUncheckedUpdateManyInput>
    /**
     * Filter which Vagases to update
     */
    where?: VagasWhereInput
    /**
     * Limit how many Vagases to update.
     */
    limit?: number
  }

  /**
   * Vagas updateManyAndReturn
   */
  export type VagasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * The data used to update Vagases.
     */
    data: XOR<VagasUpdateManyMutationInput, VagasUncheckedUpdateManyInput>
    /**
     * Filter which Vagases to update
     */
    where?: VagasWhereInput
    /**
     * Limit how many Vagases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vagas upsert
   */
  export type VagasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    /**
     * The filter to search for the Vagas to update in case it exists.
     */
    where: VagasWhereUniqueInput
    /**
     * In case the Vagas found by the `where` argument doesn't exist, create a new Vagas with this data.
     */
    create: XOR<VagasCreateInput, VagasUncheckedCreateInput>
    /**
     * In case the Vagas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VagasUpdateInput, VagasUncheckedUpdateInput>
  }

  /**
   * Vagas delete
   */
  export type VagasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
    /**
     * Filter which Vagas to delete.
     */
    where: VagasWhereUniqueInput
  }

  /**
   * Vagas deleteMany
   */
  export type VagasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vagases to delete
     */
    where?: VagasWhereInput
    /**
     * Limit how many Vagases to delete.
     */
    limit?: number
  }

  /**
   * Vagas.pagamentos
   */
  export type Vagas$pagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamentos
     */
    select?: PagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamentos
     */
    omit?: PagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentosInclude<ExtArgs> | null
    where?: PagamentosWhereInput
    orderBy?: PagamentosOrderByWithRelationInput | PagamentosOrderByWithRelationInput[]
    cursor?: PagamentosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentosScalarFieldEnum | PagamentosScalarFieldEnum[]
  }

  /**
   * Vagas without action
   */
  export type VagasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vagas
     */
    select?: VagasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vagas
     */
    omit?: VagasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagasInclude<ExtArgs> | null
  }


  /**
   * Model Pagamentos
   */

  export type AggregatePagamentos = {
    _count: PagamentosCountAggregateOutputType | null
    _avg: PagamentosAvgAggregateOutputType | null
    _sum: PagamentosSumAggregateOutputType | null
    _min: PagamentosMinAggregateOutputType | null
    _max: PagamentosMaxAggregateOutputType | null
  }

  export type PagamentosAvgAggregateOutputType = {
    idUser: number | null
    id_vaga: number | null
    id_pagamento: number | null
    valor: number | null
  }

  export type PagamentosSumAggregateOutputType = {
    idUser: number | null
    id_vaga: number | null
    id_pagamento: number | null
    valor: number | null
  }

  export type PagamentosMinAggregateOutputType = {
    idUser: number | null
    id_vaga: number | null
    id_pagamento: number | null
    data_inicio: Date | null
    data_fim: Date | null
    valor: number | null
    status_pagamento: string | null
  }

  export type PagamentosMaxAggregateOutputType = {
    idUser: number | null
    id_vaga: number | null
    id_pagamento: number | null
    data_inicio: Date | null
    data_fim: Date | null
    valor: number | null
    status_pagamento: string | null
  }

  export type PagamentosCountAggregateOutputType = {
    idUser: number
    id_vaga: number
    id_pagamento: number
    data_inicio: number
    data_fim: number
    valor: number
    status_pagamento: number
    _all: number
  }


  export type PagamentosAvgAggregateInputType = {
    idUser?: true
    id_vaga?: true
    id_pagamento?: true
    valor?: true
  }

  export type PagamentosSumAggregateInputType = {
    idUser?: true
    id_vaga?: true
    id_pagamento?: true
    valor?: true
  }

  export type PagamentosMinAggregateInputType = {
    idUser?: true
    id_vaga?: true
    id_pagamento?: true
    data_inicio?: true
    data_fim?: true
    valor?: true
    status_pagamento?: true
  }

  export type PagamentosMaxAggregateInputType = {
    idUser?: true
    id_vaga?: true
    id_pagamento?: true
    data_inicio?: true
    data_fim?: true
    valor?: true
    status_pagamento?: true
  }

  export type PagamentosCountAggregateInputType = {
    idUser?: true
    id_vaga?: true
    id_pagamento?: true
    data_inicio?: true
    data_fim?: true
    valor?: true
    status_pagamento?: true
    _all?: true
  }

  export type PagamentosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamentos to aggregate.
     */
    where?: PagamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentosOrderByWithRelationInput | PagamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagamentos
    **/
    _count?: true | PagamentosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagamentosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagamentosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagamentosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagamentosMaxAggregateInputType
  }

  export type GetPagamentosAggregateType<T extends PagamentosAggregateArgs> = {
        [P in keyof T & keyof AggregatePagamentos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagamentos[P]>
      : GetScalarType<T[P], AggregatePagamentos[P]>
  }




  export type PagamentosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentosWhereInput
    orderBy?: PagamentosOrderByWithAggregationInput | PagamentosOrderByWithAggregationInput[]
    by: PagamentosScalarFieldEnum[] | PagamentosScalarFieldEnum
    having?: PagamentosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagamentosCountAggregateInputType | true
    _avg?: PagamentosAvgAggregateInputType
    _sum?: PagamentosSumAggregateInputType
    _min?: PagamentosMinAggregateInputType
    _max?: PagamentosMaxAggregateInputType
  }

  export type PagamentosGroupByOutputType = {
    idUser: number
    id_vaga: number
    id_pagamento: number
    data_inicio: Date
    data_fim: Date
    valor: number
    status_pagamento: string
    _count: PagamentosCountAggregateOutputType | null
    _avg: PagamentosAvgAggregateOutputType | null
    _sum: PagamentosSumAggregateOutputType | null
    _min: PagamentosMinAggregateOutputType | null
    _max: PagamentosMaxAggregateOutputType | null
  }

  type GetPagamentosGroupByPayload<T extends PagamentosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagamentosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagamentosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagamentosGroupByOutputType[P]>
            : GetScalarType<T[P], PagamentosGroupByOutputType[P]>
        }
      >
    >


  export type PagamentosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUser?: boolean
    id_vaga?: boolean
    id_pagamento?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    valor?: boolean
    status_pagamento?: boolean
    Vaga?: boolean | VagasDefaultArgs<ExtArgs>
    User?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamentos"]>

  export type PagamentosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUser?: boolean
    id_vaga?: boolean
    id_pagamento?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    valor?: boolean
    status_pagamento?: boolean
    Vaga?: boolean | VagasDefaultArgs<ExtArgs>
    User?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamentos"]>

  export type PagamentosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUser?: boolean
    id_vaga?: boolean
    id_pagamento?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    valor?: boolean
    status_pagamento?: boolean
    Vaga?: boolean | VagasDefaultArgs<ExtArgs>
    User?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamentos"]>

  export type PagamentosSelectScalar = {
    idUser?: boolean
    id_vaga?: boolean
    id_pagamento?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    valor?: boolean
    status_pagamento?: boolean
  }

  export type PagamentosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idUser" | "id_vaga" | "id_pagamento" | "data_inicio" | "data_fim" | "valor" | "status_pagamento", ExtArgs["result"]["pagamentos"]>
  export type PagamentosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vaga?: boolean | VagasDefaultArgs<ExtArgs>
    User?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type PagamentosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vaga?: boolean | VagasDefaultArgs<ExtArgs>
    User?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type PagamentosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vaga?: boolean | VagasDefaultArgs<ExtArgs>
    User?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $PagamentosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pagamentos"
    objects: {
      Vaga: Prisma.$VagasPayload<ExtArgs>
      User: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idUser: number
      id_vaga: number
      id_pagamento: number
      data_inicio: Date
      data_fim: Date
      valor: number
      status_pagamento: string
    }, ExtArgs["result"]["pagamentos"]>
    composites: {}
  }

  type PagamentosGetPayload<S extends boolean | null | undefined | PagamentosDefaultArgs> = $Result.GetResult<Prisma.$PagamentosPayload, S>

  type PagamentosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagamentosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagamentosCountAggregateInputType | true
    }

  export interface PagamentosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pagamentos'], meta: { name: 'Pagamentos' } }
    /**
     * Find zero or one Pagamentos that matches the filter.
     * @param {PagamentosFindUniqueArgs} args - Arguments to find a Pagamentos
     * @example
     * // Get one Pagamentos
     * const pagamentos = await prisma.pagamentos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagamentosFindUniqueArgs>(args: SelectSubset<T, PagamentosFindUniqueArgs<ExtArgs>>): Prisma__PagamentosClient<$Result.GetResult<Prisma.$PagamentosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagamentos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagamentosFindUniqueOrThrowArgs} args - Arguments to find a Pagamentos
     * @example
     * // Get one Pagamentos
     * const pagamentos = await prisma.pagamentos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagamentosFindUniqueOrThrowArgs>(args: SelectSubset<T, PagamentosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagamentosClient<$Result.GetResult<Prisma.$PagamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentosFindFirstArgs} args - Arguments to find a Pagamentos
     * @example
     * // Get one Pagamentos
     * const pagamentos = await prisma.pagamentos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagamentosFindFirstArgs>(args?: SelectSubset<T, PagamentosFindFirstArgs<ExtArgs>>): Prisma__PagamentosClient<$Result.GetResult<Prisma.$PagamentosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamentos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentosFindFirstOrThrowArgs} args - Arguments to find a Pagamentos
     * @example
     * // Get one Pagamentos
     * const pagamentos = await prisma.pagamentos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagamentosFindFirstOrThrowArgs>(args?: SelectSubset<T, PagamentosFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagamentosClient<$Result.GetResult<Prisma.$PagamentosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagamentos
     * const pagamentos = await prisma.pagamentos.findMany()
     * 
     * // Get first 10 Pagamentos
     * const pagamentos = await prisma.pagamentos.findMany({ take: 10 })
     * 
     * // Only select the `idUser`
     * const pagamentosWithIdUserOnly = await prisma.pagamentos.findMany({ select: { idUser: true } })
     * 
     */
    findMany<T extends PagamentosFindManyArgs>(args?: SelectSubset<T, PagamentosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagamentos.
     * @param {PagamentosCreateArgs} args - Arguments to create a Pagamentos.
     * @example
     * // Create one Pagamentos
     * const Pagamentos = await prisma.pagamentos.create({
     *   data: {
     *     // ... data to create a Pagamentos
     *   }
     * })
     * 
     */
    create<T extends PagamentosCreateArgs>(args: SelectSubset<T, PagamentosCreateArgs<ExtArgs>>): Prisma__PagamentosClient<$Result.GetResult<Prisma.$PagamentosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagamentos.
     * @param {PagamentosCreateManyArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamentos = await prisma.pagamentos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagamentosCreateManyArgs>(args?: SelectSubset<T, PagamentosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagamentos and returns the data saved in the database.
     * @param {PagamentosCreateManyAndReturnArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamentos = await prisma.pagamentos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagamentos and only return the `idUser`
     * const pagamentosWithIdUserOnly = await prisma.pagamentos.createManyAndReturn({
     *   select: { idUser: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagamentosCreateManyAndReturnArgs>(args?: SelectSubset<T, PagamentosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pagamentos.
     * @param {PagamentosDeleteArgs} args - Arguments to delete one Pagamentos.
     * @example
     * // Delete one Pagamentos
     * const Pagamentos = await prisma.pagamentos.delete({
     *   where: {
     *     // ... filter to delete one Pagamentos
     *   }
     * })
     * 
     */
    delete<T extends PagamentosDeleteArgs>(args: SelectSubset<T, PagamentosDeleteArgs<ExtArgs>>): Prisma__PagamentosClient<$Result.GetResult<Prisma.$PagamentosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagamentos.
     * @param {PagamentosUpdateArgs} args - Arguments to update one Pagamentos.
     * @example
     * // Update one Pagamentos
     * const pagamentos = await prisma.pagamentos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagamentosUpdateArgs>(args: SelectSubset<T, PagamentosUpdateArgs<ExtArgs>>): Prisma__PagamentosClient<$Result.GetResult<Prisma.$PagamentosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagamentos.
     * @param {PagamentosDeleteManyArgs} args - Arguments to filter Pagamentos to delete.
     * @example
     * // Delete a few Pagamentos
     * const { count } = await prisma.pagamentos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagamentosDeleteManyArgs>(args?: SelectSubset<T, PagamentosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagamentos
     * const pagamentos = await prisma.pagamentos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagamentosUpdateManyArgs>(args: SelectSubset<T, PagamentosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos and returns the data updated in the database.
     * @param {PagamentosUpdateManyAndReturnArgs} args - Arguments to update many Pagamentos.
     * @example
     * // Update many Pagamentos
     * const pagamentos = await prisma.pagamentos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pagamentos and only return the `idUser`
     * const pagamentosWithIdUserOnly = await prisma.pagamentos.updateManyAndReturn({
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
    updateManyAndReturn<T extends PagamentosUpdateManyAndReturnArgs>(args: SelectSubset<T, PagamentosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pagamentos.
     * @param {PagamentosUpsertArgs} args - Arguments to update or create a Pagamentos.
     * @example
     * // Update or create a Pagamentos
     * const pagamentos = await prisma.pagamentos.upsert({
     *   create: {
     *     // ... data to create a Pagamentos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagamentos we want to update
     *   }
     * })
     */
    upsert<T extends PagamentosUpsertArgs>(args: SelectSubset<T, PagamentosUpsertArgs<ExtArgs>>): Prisma__PagamentosClient<$Result.GetResult<Prisma.$PagamentosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentosCountArgs} args - Arguments to filter Pagamentos to count.
     * @example
     * // Count the number of Pagamentos
     * const count = await prisma.pagamentos.count({
     *   where: {
     *     // ... the filter for the Pagamentos we want to count
     *   }
     * })
    **/
    count<T extends PagamentosCountArgs>(
      args?: Subset<T, PagamentosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagamentosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagamentosAggregateArgs>(args: Subset<T, PagamentosAggregateArgs>): Prisma.PrismaPromise<GetPagamentosAggregateType<T>>

    /**
     * Group by Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentosGroupByArgs} args - Group by arguments.
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
      T extends PagamentosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagamentosGroupByArgs['orderBy'] }
        : { orderBy?: PagamentosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PagamentosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagamentosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pagamentos model
   */
  readonly fields: PagamentosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pagamentos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagamentosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Vaga<T extends VagasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VagasDefaultArgs<ExtArgs>>): Prisma__VagasClient<$Result.GetResult<Prisma.$VagasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pagamentos model
   */
  interface PagamentosFieldRefs {
    readonly idUser: FieldRef<"Pagamentos", 'Int'>
    readonly id_vaga: FieldRef<"Pagamentos", 'Int'>
    readonly id_pagamento: FieldRef<"Pagamentos", 'Int'>
    readonly data_inicio: FieldRef<"Pagamentos", 'DateTime'>
    readonly data_fim: FieldRef<"Pagamentos", 'DateTime'>
    readonly valor: FieldRef<"Pagamentos", 'Float'>
    readonly status_pagamento: FieldRef<"Pagamentos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pagamentos findUnique
   */
  export type PagamentosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamentos
     */
    select?: PagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamentos
     */
    omit?: PagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentosInclude<ExtArgs> | null
    /**
     * Filter, which Pagamentos to fetch.
     */
    where: PagamentosWhereUniqueInput
  }

  /**
   * Pagamentos findUniqueOrThrow
   */
  export type PagamentosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamentos
     */
    select?: PagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamentos
     */
    omit?: PagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentosInclude<ExtArgs> | null
    /**
     * Filter, which Pagamentos to fetch.
     */
    where: PagamentosWhereUniqueInput
  }

  /**
   * Pagamentos findFirst
   */
  export type PagamentosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamentos
     */
    select?: PagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamentos
     */
    omit?: PagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentosInclude<ExtArgs> | null
    /**
     * Filter, which Pagamentos to fetch.
     */
    where?: PagamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentosOrderByWithRelationInput | PagamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentosScalarFieldEnum | PagamentosScalarFieldEnum[]
  }

  /**
   * Pagamentos findFirstOrThrow
   */
  export type PagamentosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamentos
     */
    select?: PagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamentos
     */
    omit?: PagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentosInclude<ExtArgs> | null
    /**
     * Filter, which Pagamentos to fetch.
     */
    where?: PagamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentosOrderByWithRelationInput | PagamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentosScalarFieldEnum | PagamentosScalarFieldEnum[]
  }

  /**
   * Pagamentos findMany
   */
  export type PagamentosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamentos
     */
    select?: PagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamentos
     */
    omit?: PagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentosInclude<ExtArgs> | null
    /**
     * Filter, which Pagamentos to fetch.
     */
    where?: PagamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentosOrderByWithRelationInput | PagamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagamentos.
     */
    cursor?: PagamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    distinct?: PagamentosScalarFieldEnum | PagamentosScalarFieldEnum[]
  }

  /**
   * Pagamentos create
   */
  export type PagamentosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamentos
     */
    select?: PagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamentos
     */
    omit?: PagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentosInclude<ExtArgs> | null
    /**
     * The data needed to create a Pagamentos.
     */
    data: XOR<PagamentosCreateInput, PagamentosUncheckedCreateInput>
  }

  /**
   * Pagamentos createMany
   */
  export type PagamentosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentosCreateManyInput | PagamentosCreateManyInput[]
  }

  /**
   * Pagamentos createManyAndReturn
   */
  export type PagamentosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamentos
     */
    select?: PagamentosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamentos
     */
    omit?: PagamentosOmit<ExtArgs> | null
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentosCreateManyInput | PagamentosCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamentos update
   */
  export type PagamentosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamentos
     */
    select?: PagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamentos
     */
    omit?: PagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentosInclude<ExtArgs> | null
    /**
     * The data needed to update a Pagamentos.
     */
    data: XOR<PagamentosUpdateInput, PagamentosUncheckedUpdateInput>
    /**
     * Choose, which Pagamentos to update.
     */
    where: PagamentosWhereUniqueInput
  }

  /**
   * Pagamentos updateMany
   */
  export type PagamentosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentosUpdateManyMutationInput, PagamentosUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentosWhereInput
    /**
     * Limit how many Pagamentos to update.
     */
    limit?: number
  }

  /**
   * Pagamentos updateManyAndReturn
   */
  export type PagamentosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamentos
     */
    select?: PagamentosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamentos
     */
    omit?: PagamentosOmit<ExtArgs> | null
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentosUpdateManyMutationInput, PagamentosUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentosWhereInput
    /**
     * Limit how many Pagamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamentos upsert
   */
  export type PagamentosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamentos
     */
    select?: PagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamentos
     */
    omit?: PagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentosInclude<ExtArgs> | null
    /**
     * The filter to search for the Pagamentos to update in case it exists.
     */
    where: PagamentosWhereUniqueInput
    /**
     * In case the Pagamentos found by the `where` argument doesn't exist, create a new Pagamentos with this data.
     */
    create: XOR<PagamentosCreateInput, PagamentosUncheckedCreateInput>
    /**
     * In case the Pagamentos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagamentosUpdateInput, PagamentosUncheckedUpdateInput>
  }

  /**
   * Pagamentos delete
   */
  export type PagamentosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamentos
     */
    select?: PagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamentos
     */
    omit?: PagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentosInclude<ExtArgs> | null
    /**
     * Filter which Pagamentos to delete.
     */
    where: PagamentosWhereUniqueInput
  }

  /**
   * Pagamentos deleteMany
   */
  export type PagamentosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamentos to delete
     */
    where?: PagamentosWhereInput
    /**
     * Limit how many Pagamentos to delete.
     */
    limit?: number
  }

  /**
   * Pagamentos without action
   */
  export type PagamentosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamentos
     */
    select?: PagamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamentos
     */
    omit?: PagamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
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


  export const EstacionamentosScalarFieldEnum: {
    id_estacionamento: 'id_estacionamento',
    nome: 'nome',
    endereco: 'endereco',
    qtd_vagas: 'qtd_vagas'
  };

  export type EstacionamentosScalarFieldEnum = (typeof EstacionamentosScalarFieldEnum)[keyof typeof EstacionamentosScalarFieldEnum]


  export const VagasScalarFieldEnum: {
    id_vaga: 'id_vaga',
    id_estacionamento: 'id_estacionamento',
    status_vaga: 'status_vaga'
  };

  export type VagasScalarFieldEnum = (typeof VagasScalarFieldEnum)[keyof typeof VagasScalarFieldEnum]


  export const PagamentosScalarFieldEnum: {
    idUser: 'idUser',
    id_vaga: 'id_vaga',
    id_pagamento: 'id_pagamento',
    data_inicio: 'data_inicio',
    data_fim: 'data_fim',
    valor: 'valor',
    status_pagamento: 'status_pagamento'
  };

  export type PagamentosScalarFieldEnum = (typeof PagamentosScalarFieldEnum)[keyof typeof PagamentosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
    pagamentos?: PagamentosListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    idUser?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    pagamentos?: PagamentosOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    idUser?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    pagamentos?: PagamentosListRelationFilter
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

  export type EstacionamentosWhereInput = {
    AND?: EstacionamentosWhereInput | EstacionamentosWhereInput[]
    OR?: EstacionamentosWhereInput[]
    NOT?: EstacionamentosWhereInput | EstacionamentosWhereInput[]
    id_estacionamento?: IntFilter<"Estacionamentos"> | number
    nome?: StringFilter<"Estacionamentos"> | string
    endereco?: StringFilter<"Estacionamentos"> | string
    qtd_vagas?: IntFilter<"Estacionamentos"> | number
    vagas?: VagasListRelationFilter
  }

  export type EstacionamentosOrderByWithRelationInput = {
    id_estacionamento?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    qtd_vagas?: SortOrder
    vagas?: VagasOrderByRelationAggregateInput
  }

  export type EstacionamentosWhereUniqueInput = Prisma.AtLeast<{
    id_estacionamento?: number
    AND?: EstacionamentosWhereInput | EstacionamentosWhereInput[]
    OR?: EstacionamentosWhereInput[]
    NOT?: EstacionamentosWhereInput | EstacionamentosWhereInput[]
    nome?: StringFilter<"Estacionamentos"> | string
    endereco?: StringFilter<"Estacionamentos"> | string
    qtd_vagas?: IntFilter<"Estacionamentos"> | number
    vagas?: VagasListRelationFilter
  }, "id_estacionamento">

  export type EstacionamentosOrderByWithAggregationInput = {
    id_estacionamento?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    qtd_vagas?: SortOrder
    _count?: EstacionamentosCountOrderByAggregateInput
    _avg?: EstacionamentosAvgOrderByAggregateInput
    _max?: EstacionamentosMaxOrderByAggregateInput
    _min?: EstacionamentosMinOrderByAggregateInput
    _sum?: EstacionamentosSumOrderByAggregateInput
  }

  export type EstacionamentosScalarWhereWithAggregatesInput = {
    AND?: EstacionamentosScalarWhereWithAggregatesInput | EstacionamentosScalarWhereWithAggregatesInput[]
    OR?: EstacionamentosScalarWhereWithAggregatesInput[]
    NOT?: EstacionamentosScalarWhereWithAggregatesInput | EstacionamentosScalarWhereWithAggregatesInput[]
    id_estacionamento?: IntWithAggregatesFilter<"Estacionamentos"> | number
    nome?: StringWithAggregatesFilter<"Estacionamentos"> | string
    endereco?: StringWithAggregatesFilter<"Estacionamentos"> | string
    qtd_vagas?: IntWithAggregatesFilter<"Estacionamentos"> | number
  }

  export type VagasWhereInput = {
    AND?: VagasWhereInput | VagasWhereInput[]
    OR?: VagasWhereInput[]
    NOT?: VagasWhereInput | VagasWhereInput[]
    id_vaga?: IntFilter<"Vagas"> | number
    id_estacionamento?: IntFilter<"Vagas"> | number
    status_vaga?: StringFilter<"Vagas"> | string
    pagamentos?: PagamentosListRelationFilter
    estacionamento?: XOR<EstacionamentosScalarRelationFilter, EstacionamentosWhereInput>
  }

  export type VagasOrderByWithRelationInput = {
    id_vaga?: SortOrder
    id_estacionamento?: SortOrder
    status_vaga?: SortOrder
    pagamentos?: PagamentosOrderByRelationAggregateInput
    estacionamento?: EstacionamentosOrderByWithRelationInput
  }

  export type VagasWhereUniqueInput = Prisma.AtLeast<{
    id_vaga?: number
    AND?: VagasWhereInput | VagasWhereInput[]
    OR?: VagasWhereInput[]
    NOT?: VagasWhereInput | VagasWhereInput[]
    id_estacionamento?: IntFilter<"Vagas"> | number
    status_vaga?: StringFilter<"Vagas"> | string
    pagamentos?: PagamentosListRelationFilter
    estacionamento?: XOR<EstacionamentosScalarRelationFilter, EstacionamentosWhereInput>
  }, "id_vaga">

  export type VagasOrderByWithAggregationInput = {
    id_vaga?: SortOrder
    id_estacionamento?: SortOrder
    status_vaga?: SortOrder
    _count?: VagasCountOrderByAggregateInput
    _avg?: VagasAvgOrderByAggregateInput
    _max?: VagasMaxOrderByAggregateInput
    _min?: VagasMinOrderByAggregateInput
    _sum?: VagasSumOrderByAggregateInput
  }

  export type VagasScalarWhereWithAggregatesInput = {
    AND?: VagasScalarWhereWithAggregatesInput | VagasScalarWhereWithAggregatesInput[]
    OR?: VagasScalarWhereWithAggregatesInput[]
    NOT?: VagasScalarWhereWithAggregatesInput | VagasScalarWhereWithAggregatesInput[]
    id_vaga?: IntWithAggregatesFilter<"Vagas"> | number
    id_estacionamento?: IntWithAggregatesFilter<"Vagas"> | number
    status_vaga?: StringWithAggregatesFilter<"Vagas"> | string
  }

  export type PagamentosWhereInput = {
    AND?: PagamentosWhereInput | PagamentosWhereInput[]
    OR?: PagamentosWhereInput[]
    NOT?: PagamentosWhereInput | PagamentosWhereInput[]
    idUser?: IntFilter<"Pagamentos"> | number
    id_vaga?: IntFilter<"Pagamentos"> | number
    id_pagamento?: IntFilter<"Pagamentos"> | number
    data_inicio?: DateTimeFilter<"Pagamentos"> | Date | string
    data_fim?: DateTimeFilter<"Pagamentos"> | Date | string
    valor?: FloatFilter<"Pagamentos"> | number
    status_pagamento?: StringFilter<"Pagamentos"> | string
    Vaga?: XOR<VagasScalarRelationFilter, VagasWhereInput>
    User?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type PagamentosOrderByWithRelationInput = {
    idUser?: SortOrder
    id_vaga?: SortOrder
    id_pagamento?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    valor?: SortOrder
    status_pagamento?: SortOrder
    Vaga?: VagasOrderByWithRelationInput
    User?: UsersOrderByWithRelationInput
  }

  export type PagamentosWhereUniqueInput = Prisma.AtLeast<{
    id_pagamento?: number
    AND?: PagamentosWhereInput | PagamentosWhereInput[]
    OR?: PagamentosWhereInput[]
    NOT?: PagamentosWhereInput | PagamentosWhereInput[]
    idUser?: IntFilter<"Pagamentos"> | number
    id_vaga?: IntFilter<"Pagamentos"> | number
    data_inicio?: DateTimeFilter<"Pagamentos"> | Date | string
    data_fim?: DateTimeFilter<"Pagamentos"> | Date | string
    valor?: FloatFilter<"Pagamentos"> | number
    status_pagamento?: StringFilter<"Pagamentos"> | string
    Vaga?: XOR<VagasScalarRelationFilter, VagasWhereInput>
    User?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id_pagamento">

  export type PagamentosOrderByWithAggregationInput = {
    idUser?: SortOrder
    id_vaga?: SortOrder
    id_pagamento?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    valor?: SortOrder
    status_pagamento?: SortOrder
    _count?: PagamentosCountOrderByAggregateInput
    _avg?: PagamentosAvgOrderByAggregateInput
    _max?: PagamentosMaxOrderByAggregateInput
    _min?: PagamentosMinOrderByAggregateInput
    _sum?: PagamentosSumOrderByAggregateInput
  }

  export type PagamentosScalarWhereWithAggregatesInput = {
    AND?: PagamentosScalarWhereWithAggregatesInput | PagamentosScalarWhereWithAggregatesInput[]
    OR?: PagamentosScalarWhereWithAggregatesInput[]
    NOT?: PagamentosScalarWhereWithAggregatesInput | PagamentosScalarWhereWithAggregatesInput[]
    idUser?: IntWithAggregatesFilter<"Pagamentos"> | number
    id_vaga?: IntWithAggregatesFilter<"Pagamentos"> | number
    id_pagamento?: IntWithAggregatesFilter<"Pagamentos"> | number
    data_inicio?: DateTimeWithAggregatesFilter<"Pagamentos"> | Date | string
    data_fim?: DateTimeWithAggregatesFilter<"Pagamentos"> | Date | string
    valor?: FloatWithAggregatesFilter<"Pagamentos"> | number
    status_pagamento?: StringWithAggregatesFilter<"Pagamentos"> | string
  }

  export type UsersCreateInput = {
    email: string
    name: string
    password: string
    pagamentos?: PagamentosCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    idUser?: number
    email: string
    name: string
    password: string
    pagamentos?: PagamentosUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pagamentos?: PagamentosUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    idUser?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pagamentos?: PagamentosUncheckedUpdateManyWithoutUserNestedInput
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

  export type EstacionamentosCreateInput = {
    nome: string
    endereco: string
    qtd_vagas: number
    vagas?: VagasCreateNestedManyWithoutEstacionamentoInput
  }

  export type EstacionamentosUncheckedCreateInput = {
    id_estacionamento?: number
    nome: string
    endereco: string
    qtd_vagas: number
    vagas?: VagasUncheckedCreateNestedManyWithoutEstacionamentoInput
  }

  export type EstacionamentosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    qtd_vagas?: IntFieldUpdateOperationsInput | number
    vagas?: VagasUpdateManyWithoutEstacionamentoNestedInput
  }

  export type EstacionamentosUncheckedUpdateInput = {
    id_estacionamento?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    qtd_vagas?: IntFieldUpdateOperationsInput | number
    vagas?: VagasUncheckedUpdateManyWithoutEstacionamentoNestedInput
  }

  export type EstacionamentosCreateManyInput = {
    id_estacionamento?: number
    nome: string
    endereco: string
    qtd_vagas: number
  }

  export type EstacionamentosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    qtd_vagas?: IntFieldUpdateOperationsInput | number
  }

  export type EstacionamentosUncheckedUpdateManyInput = {
    id_estacionamento?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    qtd_vagas?: IntFieldUpdateOperationsInput | number
  }

  export type VagasCreateInput = {
    status_vaga: string
    pagamentos?: PagamentosCreateNestedManyWithoutVagaInput
    estacionamento: EstacionamentosCreateNestedOneWithoutVagasInput
  }

  export type VagasUncheckedCreateInput = {
    id_vaga?: number
    id_estacionamento: number
    status_vaga: string
    pagamentos?: PagamentosUncheckedCreateNestedManyWithoutVagaInput
  }

  export type VagasUpdateInput = {
    status_vaga?: StringFieldUpdateOperationsInput | string
    pagamentos?: PagamentosUpdateManyWithoutVagaNestedInput
    estacionamento?: EstacionamentosUpdateOneRequiredWithoutVagasNestedInput
  }

  export type VagasUncheckedUpdateInput = {
    id_vaga?: IntFieldUpdateOperationsInput | number
    id_estacionamento?: IntFieldUpdateOperationsInput | number
    status_vaga?: StringFieldUpdateOperationsInput | string
    pagamentos?: PagamentosUncheckedUpdateManyWithoutVagaNestedInput
  }

  export type VagasCreateManyInput = {
    id_vaga?: number
    id_estacionamento: number
    status_vaga: string
  }

  export type VagasUpdateManyMutationInput = {
    status_vaga?: StringFieldUpdateOperationsInput | string
  }

  export type VagasUncheckedUpdateManyInput = {
    id_vaga?: IntFieldUpdateOperationsInput | number
    id_estacionamento?: IntFieldUpdateOperationsInput | number
    status_vaga?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentosCreateInput = {
    data_inicio: Date | string
    data_fim: Date | string
    valor: number
    status_pagamento: string
    Vaga: VagasCreateNestedOneWithoutPagamentosInput
    User: UsersCreateNestedOneWithoutPagamentosInput
  }

  export type PagamentosUncheckedCreateInput = {
    idUser: number
    id_vaga: number
    id_pagamento?: number
    data_inicio: Date | string
    data_fim: Date | string
    valor: number
    status_pagamento: string
  }

  export type PagamentosUpdateInput = {
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    status_pagamento?: StringFieldUpdateOperationsInput | string
    Vaga?: VagasUpdateOneRequiredWithoutPagamentosNestedInput
    User?: UsersUpdateOneRequiredWithoutPagamentosNestedInput
  }

  export type PagamentosUncheckedUpdateInput = {
    idUser?: IntFieldUpdateOperationsInput | number
    id_vaga?: IntFieldUpdateOperationsInput | number
    id_pagamento?: IntFieldUpdateOperationsInput | number
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    status_pagamento?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentosCreateManyInput = {
    idUser: number
    id_vaga: number
    id_pagamento?: number
    data_inicio: Date | string
    data_fim: Date | string
    valor: number
    status_pagamento: string
  }

  export type PagamentosUpdateManyMutationInput = {
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    status_pagamento?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentosUncheckedUpdateManyInput = {
    idUser?: IntFieldUpdateOperationsInput | number
    id_vaga?: IntFieldUpdateOperationsInput | number
    id_pagamento?: IntFieldUpdateOperationsInput | number
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    status_pagamento?: StringFieldUpdateOperationsInput | string
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PagamentosListRelationFilter = {
    every?: PagamentosWhereInput
    some?: PagamentosWhereInput
    none?: PagamentosWhereInput
  }

  export type PagamentosOrderByRelationAggregateInput = {
    _count?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type VagasListRelationFilter = {
    every?: VagasWhereInput
    some?: VagasWhereInput
    none?: VagasWhereInput
  }

  export type VagasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstacionamentosCountOrderByAggregateInput = {
    id_estacionamento?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    qtd_vagas?: SortOrder
  }

  export type EstacionamentosAvgOrderByAggregateInput = {
    id_estacionamento?: SortOrder
    qtd_vagas?: SortOrder
  }

  export type EstacionamentosMaxOrderByAggregateInput = {
    id_estacionamento?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    qtd_vagas?: SortOrder
  }

  export type EstacionamentosMinOrderByAggregateInput = {
    id_estacionamento?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    qtd_vagas?: SortOrder
  }

  export type EstacionamentosSumOrderByAggregateInput = {
    id_estacionamento?: SortOrder
    qtd_vagas?: SortOrder
  }

  export type EstacionamentosScalarRelationFilter = {
    is?: EstacionamentosWhereInput
    isNot?: EstacionamentosWhereInput
  }

  export type VagasCountOrderByAggregateInput = {
    id_vaga?: SortOrder
    id_estacionamento?: SortOrder
    status_vaga?: SortOrder
  }

  export type VagasAvgOrderByAggregateInput = {
    id_vaga?: SortOrder
    id_estacionamento?: SortOrder
  }

  export type VagasMaxOrderByAggregateInput = {
    id_vaga?: SortOrder
    id_estacionamento?: SortOrder
    status_vaga?: SortOrder
  }

  export type VagasMinOrderByAggregateInput = {
    id_vaga?: SortOrder
    id_estacionamento?: SortOrder
    status_vaga?: SortOrder
  }

  export type VagasSumOrderByAggregateInput = {
    id_vaga?: SortOrder
    id_estacionamento?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VagasScalarRelationFilter = {
    is?: VagasWhereInput
    isNot?: VagasWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type PagamentosCountOrderByAggregateInput = {
    idUser?: SortOrder
    id_vaga?: SortOrder
    id_pagamento?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    valor?: SortOrder
    status_pagamento?: SortOrder
  }

  export type PagamentosAvgOrderByAggregateInput = {
    idUser?: SortOrder
    id_vaga?: SortOrder
    id_pagamento?: SortOrder
    valor?: SortOrder
  }

  export type PagamentosMaxOrderByAggregateInput = {
    idUser?: SortOrder
    id_vaga?: SortOrder
    id_pagamento?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    valor?: SortOrder
    status_pagamento?: SortOrder
  }

  export type PagamentosMinOrderByAggregateInput = {
    idUser?: SortOrder
    id_vaga?: SortOrder
    id_pagamento?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    valor?: SortOrder
    status_pagamento?: SortOrder
  }

  export type PagamentosSumOrderByAggregateInput = {
    idUser?: SortOrder
    id_vaga?: SortOrder
    id_pagamento?: SortOrder
    valor?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type PagamentosCreateNestedManyWithoutUserInput = {
    create?: XOR<PagamentosCreateWithoutUserInput, PagamentosUncheckedCreateWithoutUserInput> | PagamentosCreateWithoutUserInput[] | PagamentosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PagamentosCreateOrConnectWithoutUserInput | PagamentosCreateOrConnectWithoutUserInput[]
    createMany?: PagamentosCreateManyUserInputEnvelope
    connect?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
  }

  export type PagamentosUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PagamentosCreateWithoutUserInput, PagamentosUncheckedCreateWithoutUserInput> | PagamentosCreateWithoutUserInput[] | PagamentosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PagamentosCreateOrConnectWithoutUserInput | PagamentosCreateOrConnectWithoutUserInput[]
    createMany?: PagamentosCreateManyUserInputEnvelope
    connect?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PagamentosUpdateManyWithoutUserNestedInput = {
    create?: XOR<PagamentosCreateWithoutUserInput, PagamentosUncheckedCreateWithoutUserInput> | PagamentosCreateWithoutUserInput[] | PagamentosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PagamentosCreateOrConnectWithoutUserInput | PagamentosCreateOrConnectWithoutUserInput[]
    upsert?: PagamentosUpsertWithWhereUniqueWithoutUserInput | PagamentosUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PagamentosCreateManyUserInputEnvelope
    set?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
    disconnect?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
    delete?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
    connect?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
    update?: PagamentosUpdateWithWhereUniqueWithoutUserInput | PagamentosUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PagamentosUpdateManyWithWhereWithoutUserInput | PagamentosUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PagamentosScalarWhereInput | PagamentosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PagamentosUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PagamentosCreateWithoutUserInput, PagamentosUncheckedCreateWithoutUserInput> | PagamentosCreateWithoutUserInput[] | PagamentosUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PagamentosCreateOrConnectWithoutUserInput | PagamentosCreateOrConnectWithoutUserInput[]
    upsert?: PagamentosUpsertWithWhereUniqueWithoutUserInput | PagamentosUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PagamentosCreateManyUserInputEnvelope
    set?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
    disconnect?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
    delete?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
    connect?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
    update?: PagamentosUpdateWithWhereUniqueWithoutUserInput | PagamentosUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PagamentosUpdateManyWithWhereWithoutUserInput | PagamentosUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PagamentosScalarWhereInput | PagamentosScalarWhereInput[]
  }

  export type VagasCreateNestedManyWithoutEstacionamentoInput = {
    create?: XOR<VagasCreateWithoutEstacionamentoInput, VagasUncheckedCreateWithoutEstacionamentoInput> | VagasCreateWithoutEstacionamentoInput[] | VagasUncheckedCreateWithoutEstacionamentoInput[]
    connectOrCreate?: VagasCreateOrConnectWithoutEstacionamentoInput | VagasCreateOrConnectWithoutEstacionamentoInput[]
    createMany?: VagasCreateManyEstacionamentoInputEnvelope
    connect?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
  }

  export type VagasUncheckedCreateNestedManyWithoutEstacionamentoInput = {
    create?: XOR<VagasCreateWithoutEstacionamentoInput, VagasUncheckedCreateWithoutEstacionamentoInput> | VagasCreateWithoutEstacionamentoInput[] | VagasUncheckedCreateWithoutEstacionamentoInput[]
    connectOrCreate?: VagasCreateOrConnectWithoutEstacionamentoInput | VagasCreateOrConnectWithoutEstacionamentoInput[]
    createMany?: VagasCreateManyEstacionamentoInputEnvelope
    connect?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
  }

  export type VagasUpdateManyWithoutEstacionamentoNestedInput = {
    create?: XOR<VagasCreateWithoutEstacionamentoInput, VagasUncheckedCreateWithoutEstacionamentoInput> | VagasCreateWithoutEstacionamentoInput[] | VagasUncheckedCreateWithoutEstacionamentoInput[]
    connectOrCreate?: VagasCreateOrConnectWithoutEstacionamentoInput | VagasCreateOrConnectWithoutEstacionamentoInput[]
    upsert?: VagasUpsertWithWhereUniqueWithoutEstacionamentoInput | VagasUpsertWithWhereUniqueWithoutEstacionamentoInput[]
    createMany?: VagasCreateManyEstacionamentoInputEnvelope
    set?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
    disconnect?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
    delete?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
    connect?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
    update?: VagasUpdateWithWhereUniqueWithoutEstacionamentoInput | VagasUpdateWithWhereUniqueWithoutEstacionamentoInput[]
    updateMany?: VagasUpdateManyWithWhereWithoutEstacionamentoInput | VagasUpdateManyWithWhereWithoutEstacionamentoInput[]
    deleteMany?: VagasScalarWhereInput | VagasScalarWhereInput[]
  }

  export type VagasUncheckedUpdateManyWithoutEstacionamentoNestedInput = {
    create?: XOR<VagasCreateWithoutEstacionamentoInput, VagasUncheckedCreateWithoutEstacionamentoInput> | VagasCreateWithoutEstacionamentoInput[] | VagasUncheckedCreateWithoutEstacionamentoInput[]
    connectOrCreate?: VagasCreateOrConnectWithoutEstacionamentoInput | VagasCreateOrConnectWithoutEstacionamentoInput[]
    upsert?: VagasUpsertWithWhereUniqueWithoutEstacionamentoInput | VagasUpsertWithWhereUniqueWithoutEstacionamentoInput[]
    createMany?: VagasCreateManyEstacionamentoInputEnvelope
    set?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
    disconnect?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
    delete?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
    connect?: VagasWhereUniqueInput | VagasWhereUniqueInput[]
    update?: VagasUpdateWithWhereUniqueWithoutEstacionamentoInput | VagasUpdateWithWhereUniqueWithoutEstacionamentoInput[]
    updateMany?: VagasUpdateManyWithWhereWithoutEstacionamentoInput | VagasUpdateManyWithWhereWithoutEstacionamentoInput[]
    deleteMany?: VagasScalarWhereInput | VagasScalarWhereInput[]
  }

  export type PagamentosCreateNestedManyWithoutVagaInput = {
    create?: XOR<PagamentosCreateWithoutVagaInput, PagamentosUncheckedCreateWithoutVagaInput> | PagamentosCreateWithoutVagaInput[] | PagamentosUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: PagamentosCreateOrConnectWithoutVagaInput | PagamentosCreateOrConnectWithoutVagaInput[]
    createMany?: PagamentosCreateManyVagaInputEnvelope
    connect?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
  }

  export type EstacionamentosCreateNestedOneWithoutVagasInput = {
    create?: XOR<EstacionamentosCreateWithoutVagasInput, EstacionamentosUncheckedCreateWithoutVagasInput>
    connectOrCreate?: EstacionamentosCreateOrConnectWithoutVagasInput
    connect?: EstacionamentosWhereUniqueInput
  }

  export type PagamentosUncheckedCreateNestedManyWithoutVagaInput = {
    create?: XOR<PagamentosCreateWithoutVagaInput, PagamentosUncheckedCreateWithoutVagaInput> | PagamentosCreateWithoutVagaInput[] | PagamentosUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: PagamentosCreateOrConnectWithoutVagaInput | PagamentosCreateOrConnectWithoutVagaInput[]
    createMany?: PagamentosCreateManyVagaInputEnvelope
    connect?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
  }

  export type PagamentosUpdateManyWithoutVagaNestedInput = {
    create?: XOR<PagamentosCreateWithoutVagaInput, PagamentosUncheckedCreateWithoutVagaInput> | PagamentosCreateWithoutVagaInput[] | PagamentosUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: PagamentosCreateOrConnectWithoutVagaInput | PagamentosCreateOrConnectWithoutVagaInput[]
    upsert?: PagamentosUpsertWithWhereUniqueWithoutVagaInput | PagamentosUpsertWithWhereUniqueWithoutVagaInput[]
    createMany?: PagamentosCreateManyVagaInputEnvelope
    set?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
    disconnect?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
    delete?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
    connect?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
    update?: PagamentosUpdateWithWhereUniqueWithoutVagaInput | PagamentosUpdateWithWhereUniqueWithoutVagaInput[]
    updateMany?: PagamentosUpdateManyWithWhereWithoutVagaInput | PagamentosUpdateManyWithWhereWithoutVagaInput[]
    deleteMany?: PagamentosScalarWhereInput | PagamentosScalarWhereInput[]
  }

  export type EstacionamentosUpdateOneRequiredWithoutVagasNestedInput = {
    create?: XOR<EstacionamentosCreateWithoutVagasInput, EstacionamentosUncheckedCreateWithoutVagasInput>
    connectOrCreate?: EstacionamentosCreateOrConnectWithoutVagasInput
    upsert?: EstacionamentosUpsertWithoutVagasInput
    connect?: EstacionamentosWhereUniqueInput
    update?: XOR<XOR<EstacionamentosUpdateToOneWithWhereWithoutVagasInput, EstacionamentosUpdateWithoutVagasInput>, EstacionamentosUncheckedUpdateWithoutVagasInput>
  }

  export type PagamentosUncheckedUpdateManyWithoutVagaNestedInput = {
    create?: XOR<PagamentosCreateWithoutVagaInput, PagamentosUncheckedCreateWithoutVagaInput> | PagamentosCreateWithoutVagaInput[] | PagamentosUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: PagamentosCreateOrConnectWithoutVagaInput | PagamentosCreateOrConnectWithoutVagaInput[]
    upsert?: PagamentosUpsertWithWhereUniqueWithoutVagaInput | PagamentosUpsertWithWhereUniqueWithoutVagaInput[]
    createMany?: PagamentosCreateManyVagaInputEnvelope
    set?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
    disconnect?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
    delete?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
    connect?: PagamentosWhereUniqueInput | PagamentosWhereUniqueInput[]
    update?: PagamentosUpdateWithWhereUniqueWithoutVagaInput | PagamentosUpdateWithWhereUniqueWithoutVagaInput[]
    updateMany?: PagamentosUpdateManyWithWhereWithoutVagaInput | PagamentosUpdateManyWithWhereWithoutVagaInput[]
    deleteMany?: PagamentosScalarWhereInput | PagamentosScalarWhereInput[]
  }

  export type VagasCreateNestedOneWithoutPagamentosInput = {
    create?: XOR<VagasCreateWithoutPagamentosInput, VagasUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: VagasCreateOrConnectWithoutPagamentosInput
    connect?: VagasWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutPagamentosInput = {
    create?: XOR<UsersCreateWithoutPagamentosInput, UsersUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPagamentosInput
    connect?: UsersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VagasUpdateOneRequiredWithoutPagamentosNestedInput = {
    create?: XOR<VagasCreateWithoutPagamentosInput, VagasUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: VagasCreateOrConnectWithoutPagamentosInput
    upsert?: VagasUpsertWithoutPagamentosInput
    connect?: VagasWhereUniqueInput
    update?: XOR<XOR<VagasUpdateToOneWithWhereWithoutPagamentosInput, VagasUpdateWithoutPagamentosInput>, VagasUncheckedUpdateWithoutPagamentosInput>
  }

  export type UsersUpdateOneRequiredWithoutPagamentosNestedInput = {
    create?: XOR<UsersCreateWithoutPagamentosInput, UsersUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPagamentosInput
    upsert?: UsersUpsertWithoutPagamentosInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPagamentosInput, UsersUpdateWithoutPagamentosInput>, UsersUncheckedUpdateWithoutPagamentosInput>
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type PagamentosCreateWithoutUserInput = {
    data_inicio: Date | string
    data_fim: Date | string
    valor: number
    status_pagamento: string
    Vaga: VagasCreateNestedOneWithoutPagamentosInput
  }

  export type PagamentosUncheckedCreateWithoutUserInput = {
    id_vaga: number
    id_pagamento?: number
    data_inicio: Date | string
    data_fim: Date | string
    valor: number
    status_pagamento: string
  }

  export type PagamentosCreateOrConnectWithoutUserInput = {
    where: PagamentosWhereUniqueInput
    create: XOR<PagamentosCreateWithoutUserInput, PagamentosUncheckedCreateWithoutUserInput>
  }

  export type PagamentosCreateManyUserInputEnvelope = {
    data: PagamentosCreateManyUserInput | PagamentosCreateManyUserInput[]
  }

  export type PagamentosUpsertWithWhereUniqueWithoutUserInput = {
    where: PagamentosWhereUniqueInput
    update: XOR<PagamentosUpdateWithoutUserInput, PagamentosUncheckedUpdateWithoutUserInput>
    create: XOR<PagamentosCreateWithoutUserInput, PagamentosUncheckedCreateWithoutUserInput>
  }

  export type PagamentosUpdateWithWhereUniqueWithoutUserInput = {
    where: PagamentosWhereUniqueInput
    data: XOR<PagamentosUpdateWithoutUserInput, PagamentosUncheckedUpdateWithoutUserInput>
  }

  export type PagamentosUpdateManyWithWhereWithoutUserInput = {
    where: PagamentosScalarWhereInput
    data: XOR<PagamentosUpdateManyMutationInput, PagamentosUncheckedUpdateManyWithoutUserInput>
  }

  export type PagamentosScalarWhereInput = {
    AND?: PagamentosScalarWhereInput | PagamentosScalarWhereInput[]
    OR?: PagamentosScalarWhereInput[]
    NOT?: PagamentosScalarWhereInput | PagamentosScalarWhereInput[]
    idUser?: IntFilter<"Pagamentos"> | number
    id_vaga?: IntFilter<"Pagamentos"> | number
    id_pagamento?: IntFilter<"Pagamentos"> | number
    data_inicio?: DateTimeFilter<"Pagamentos"> | Date | string
    data_fim?: DateTimeFilter<"Pagamentos"> | Date | string
    valor?: FloatFilter<"Pagamentos"> | number
    status_pagamento?: StringFilter<"Pagamentos"> | string
  }

  export type VagasCreateWithoutEstacionamentoInput = {
    status_vaga: string
    pagamentos?: PagamentosCreateNestedManyWithoutVagaInput
  }

  export type VagasUncheckedCreateWithoutEstacionamentoInput = {
    id_vaga?: number
    status_vaga: string
    pagamentos?: PagamentosUncheckedCreateNestedManyWithoutVagaInput
  }

  export type VagasCreateOrConnectWithoutEstacionamentoInput = {
    where: VagasWhereUniqueInput
    create: XOR<VagasCreateWithoutEstacionamentoInput, VagasUncheckedCreateWithoutEstacionamentoInput>
  }

  export type VagasCreateManyEstacionamentoInputEnvelope = {
    data: VagasCreateManyEstacionamentoInput | VagasCreateManyEstacionamentoInput[]
  }

  export type VagasUpsertWithWhereUniqueWithoutEstacionamentoInput = {
    where: VagasWhereUniqueInput
    update: XOR<VagasUpdateWithoutEstacionamentoInput, VagasUncheckedUpdateWithoutEstacionamentoInput>
    create: XOR<VagasCreateWithoutEstacionamentoInput, VagasUncheckedCreateWithoutEstacionamentoInput>
  }

  export type VagasUpdateWithWhereUniqueWithoutEstacionamentoInput = {
    where: VagasWhereUniqueInput
    data: XOR<VagasUpdateWithoutEstacionamentoInput, VagasUncheckedUpdateWithoutEstacionamentoInput>
  }

  export type VagasUpdateManyWithWhereWithoutEstacionamentoInput = {
    where: VagasScalarWhereInput
    data: XOR<VagasUpdateManyMutationInput, VagasUncheckedUpdateManyWithoutEstacionamentoInput>
  }

  export type VagasScalarWhereInput = {
    AND?: VagasScalarWhereInput | VagasScalarWhereInput[]
    OR?: VagasScalarWhereInput[]
    NOT?: VagasScalarWhereInput | VagasScalarWhereInput[]
    id_vaga?: IntFilter<"Vagas"> | number
    id_estacionamento?: IntFilter<"Vagas"> | number
    status_vaga?: StringFilter<"Vagas"> | string
  }

  export type PagamentosCreateWithoutVagaInput = {
    data_inicio: Date | string
    data_fim: Date | string
    valor: number
    status_pagamento: string
    User: UsersCreateNestedOneWithoutPagamentosInput
  }

  export type PagamentosUncheckedCreateWithoutVagaInput = {
    idUser: number
    id_pagamento?: number
    data_inicio: Date | string
    data_fim: Date | string
    valor: number
    status_pagamento: string
  }

  export type PagamentosCreateOrConnectWithoutVagaInput = {
    where: PagamentosWhereUniqueInput
    create: XOR<PagamentosCreateWithoutVagaInput, PagamentosUncheckedCreateWithoutVagaInput>
  }

  export type PagamentosCreateManyVagaInputEnvelope = {
    data: PagamentosCreateManyVagaInput | PagamentosCreateManyVagaInput[]
  }

  export type EstacionamentosCreateWithoutVagasInput = {
    nome: string
    endereco: string
    qtd_vagas: number
  }

  export type EstacionamentosUncheckedCreateWithoutVagasInput = {
    id_estacionamento?: number
    nome: string
    endereco: string
    qtd_vagas: number
  }

  export type EstacionamentosCreateOrConnectWithoutVagasInput = {
    where: EstacionamentosWhereUniqueInput
    create: XOR<EstacionamentosCreateWithoutVagasInput, EstacionamentosUncheckedCreateWithoutVagasInput>
  }

  export type PagamentosUpsertWithWhereUniqueWithoutVagaInput = {
    where: PagamentosWhereUniqueInput
    update: XOR<PagamentosUpdateWithoutVagaInput, PagamentosUncheckedUpdateWithoutVagaInput>
    create: XOR<PagamentosCreateWithoutVagaInput, PagamentosUncheckedCreateWithoutVagaInput>
  }

  export type PagamentosUpdateWithWhereUniqueWithoutVagaInput = {
    where: PagamentosWhereUniqueInput
    data: XOR<PagamentosUpdateWithoutVagaInput, PagamentosUncheckedUpdateWithoutVagaInput>
  }

  export type PagamentosUpdateManyWithWhereWithoutVagaInput = {
    where: PagamentosScalarWhereInput
    data: XOR<PagamentosUpdateManyMutationInput, PagamentosUncheckedUpdateManyWithoutVagaInput>
  }

  export type EstacionamentosUpsertWithoutVagasInput = {
    update: XOR<EstacionamentosUpdateWithoutVagasInput, EstacionamentosUncheckedUpdateWithoutVagasInput>
    create: XOR<EstacionamentosCreateWithoutVagasInput, EstacionamentosUncheckedCreateWithoutVagasInput>
    where?: EstacionamentosWhereInput
  }

  export type EstacionamentosUpdateToOneWithWhereWithoutVagasInput = {
    where?: EstacionamentosWhereInput
    data: XOR<EstacionamentosUpdateWithoutVagasInput, EstacionamentosUncheckedUpdateWithoutVagasInput>
  }

  export type EstacionamentosUpdateWithoutVagasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    qtd_vagas?: IntFieldUpdateOperationsInput | number
  }

  export type EstacionamentosUncheckedUpdateWithoutVagasInput = {
    id_estacionamento?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    qtd_vagas?: IntFieldUpdateOperationsInput | number
  }

  export type VagasCreateWithoutPagamentosInput = {
    status_vaga: string
    estacionamento: EstacionamentosCreateNestedOneWithoutVagasInput
  }

  export type VagasUncheckedCreateWithoutPagamentosInput = {
    id_vaga?: number
    id_estacionamento: number
    status_vaga: string
  }

  export type VagasCreateOrConnectWithoutPagamentosInput = {
    where: VagasWhereUniqueInput
    create: XOR<VagasCreateWithoutPagamentosInput, VagasUncheckedCreateWithoutPagamentosInput>
  }

  export type UsersCreateWithoutPagamentosInput = {
    email: string
    name: string
    password: string
  }

  export type UsersUncheckedCreateWithoutPagamentosInput = {
    idUser?: number
    email: string
    name: string
    password: string
  }

  export type UsersCreateOrConnectWithoutPagamentosInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPagamentosInput, UsersUncheckedCreateWithoutPagamentosInput>
  }

  export type VagasUpsertWithoutPagamentosInput = {
    update: XOR<VagasUpdateWithoutPagamentosInput, VagasUncheckedUpdateWithoutPagamentosInput>
    create: XOR<VagasCreateWithoutPagamentosInput, VagasUncheckedCreateWithoutPagamentosInput>
    where?: VagasWhereInput
  }

  export type VagasUpdateToOneWithWhereWithoutPagamentosInput = {
    where?: VagasWhereInput
    data: XOR<VagasUpdateWithoutPagamentosInput, VagasUncheckedUpdateWithoutPagamentosInput>
  }

  export type VagasUpdateWithoutPagamentosInput = {
    status_vaga?: StringFieldUpdateOperationsInput | string
    estacionamento?: EstacionamentosUpdateOneRequiredWithoutVagasNestedInput
  }

  export type VagasUncheckedUpdateWithoutPagamentosInput = {
    id_vaga?: IntFieldUpdateOperationsInput | number
    id_estacionamento?: IntFieldUpdateOperationsInput | number
    status_vaga?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUpsertWithoutPagamentosInput = {
    update: XOR<UsersUpdateWithoutPagamentosInput, UsersUncheckedUpdateWithoutPagamentosInput>
    create: XOR<UsersCreateWithoutPagamentosInput, UsersUncheckedCreateWithoutPagamentosInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPagamentosInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPagamentosInput, UsersUncheckedUpdateWithoutPagamentosInput>
  }

  export type UsersUpdateWithoutPagamentosInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateWithoutPagamentosInput = {
    idUser?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentosCreateManyUserInput = {
    id_vaga: number
    id_pagamento?: number
    data_inicio: Date | string
    data_fim: Date | string
    valor: number
    status_pagamento: string
  }

  export type PagamentosUpdateWithoutUserInput = {
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    status_pagamento?: StringFieldUpdateOperationsInput | string
    Vaga?: VagasUpdateOneRequiredWithoutPagamentosNestedInput
  }

  export type PagamentosUncheckedUpdateWithoutUserInput = {
    id_vaga?: IntFieldUpdateOperationsInput | number
    id_pagamento?: IntFieldUpdateOperationsInput | number
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    status_pagamento?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentosUncheckedUpdateManyWithoutUserInput = {
    id_vaga?: IntFieldUpdateOperationsInput | number
    id_pagamento?: IntFieldUpdateOperationsInput | number
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    status_pagamento?: StringFieldUpdateOperationsInput | string
  }

  export type VagasCreateManyEstacionamentoInput = {
    id_vaga?: number
    status_vaga: string
  }

  export type VagasUpdateWithoutEstacionamentoInput = {
    status_vaga?: StringFieldUpdateOperationsInput | string
    pagamentos?: PagamentosUpdateManyWithoutVagaNestedInput
  }

  export type VagasUncheckedUpdateWithoutEstacionamentoInput = {
    id_vaga?: IntFieldUpdateOperationsInput | number
    status_vaga?: StringFieldUpdateOperationsInput | string
    pagamentos?: PagamentosUncheckedUpdateManyWithoutVagaNestedInput
  }

  export type VagasUncheckedUpdateManyWithoutEstacionamentoInput = {
    id_vaga?: IntFieldUpdateOperationsInput | number
    status_vaga?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentosCreateManyVagaInput = {
    idUser: number
    id_pagamento?: number
    data_inicio: Date | string
    data_fim: Date | string
    valor: number
    status_pagamento: string
  }

  export type PagamentosUpdateWithoutVagaInput = {
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    status_pagamento?: StringFieldUpdateOperationsInput | string
    User?: UsersUpdateOneRequiredWithoutPagamentosNestedInput
  }

  export type PagamentosUncheckedUpdateWithoutVagaInput = {
    idUser?: IntFieldUpdateOperationsInput | number
    id_pagamento?: IntFieldUpdateOperationsInput | number
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    status_pagamento?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentosUncheckedUpdateManyWithoutVagaInput = {
    idUser?: IntFieldUpdateOperationsInput | number
    id_pagamento?: IntFieldUpdateOperationsInput | number
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: FloatFieldUpdateOperationsInput | number
    status_pagamento?: StringFieldUpdateOperationsInput | string
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