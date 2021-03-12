# andis_as_pack

Package with two counters 'Counter' & 'Decreasing'

## instalation

npm install andis_as_pack
## Usage
 To run demo app clone this repo & simply run

npm install

npm start

## API

Every counter gets arguments - selector of element to be rendered in
Counter should be initialized after creation by calling `.init()` method

```javascript
import * as dist from 'andis_as_pack'
console.log(dist)

import {Counter, Decreasing} from '../dist'

const counter1 = new Counter('.counter-1')
counter1.init()

const counter2 = new Decreasing('.counter-2')
counter2.init()
```



