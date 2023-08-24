/*
  SPDX-License-Identifier: Apache-2.0
*/

import { Object, Property } from 'fabric-contract-api';

@Object()
export class Asset {

    @Property()
    public docType?: string;

    @Property()
    public id: string;

    @Property()
    public owner?: string;

    @Property()
    public data: string;
}
