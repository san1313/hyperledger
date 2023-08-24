/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

@Object()
export class Asset {
    @Property()
    public docType?: string;

    @Property()
    public contractID: string;

    @Property()
    public contractor: string;

    @Property()
    public contractee: string[];

    @Property()
    public contractName: string;
}
