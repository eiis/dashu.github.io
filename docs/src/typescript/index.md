## 定义数组类型
* 在 TypeScript 中,数组类型的正确表示方法是在类型后面加上[] 或者使用泛型类型

```javascript
<Array<{ id: number; name: string; completed: boolean }>>
```
以上代码使用Array<>定义了一个数组类型,包括一个id为number类型,name为string类型，completed为boolean类型

* 也可以使用类型后面加上[]定义，如下

```javascript
{ id: number; name: string; completed: boolean }[]
```
