import { Injectable } from '@angular/core';
import { CV } from '../models/cv';
@Injectable({
providedIn: 'root'
})
export class CVService {
constructor() { }
getCVs(): CV[] {
return [
new CV('T-Systems Schweiz AG', 2014),
new CV('xxxxxx', 2010, 2014),
new CV('Test 2', 2004, 2010),
]
}
}
