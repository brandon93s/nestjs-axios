import { ModuleMetadata, Provider, Type } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type HttpModuleOptions = AxiosRequestConfig;
export type HttpResponse = AxiosResponse;

export interface HttpModuleOptionsFactory {
  createHttpOptions(): Promise<HttpModuleOptions> | HttpModuleOptions;
}

export interface HttpModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<HttpModuleOptionsFactory>;
  useClass?: Type<HttpModuleOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<HttpModuleOptions> | HttpModuleOptions;
  inject?: any[];
  extraProviders?: Provider[];
}
