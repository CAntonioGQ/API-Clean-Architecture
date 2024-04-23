export abstract class UseCase<T> {
    abstract run( ...args: any): Promise<T>
}