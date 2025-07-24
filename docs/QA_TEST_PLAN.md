## ✅ QA / Test Plan

### 🔧 Functional Tests

| **Test Scenario**                    | **Expected Result**                                           | **Status** |
| ------------------------------------ | ------------------------------------------------------------- | ---------- |
| Character list loads with pagination | First page of characters is displayed with pagination working | ✅         |
| Search with name "Luke Skywalker"    | Only one character ("Luke Skywalker") shown                   | ✅         |
| Click on character                   | Modal opens showing detailed information                      | ✅         |
| Empty search                         | Returns paginated list (default state)                        | ✅         |
| API error (e.g., SWAPI down)         | Friendly error message shown or no crash                      | ✅         |

---

### 🎨 UI Tests

| **Component**  | **Test**                        | **Expected Behavior**             | **Status** |
| -------------- | ------------------------------- | --------------------------------- | ---------- |
| Navbar         | Present at top with site name   | ✅ Fixed/sticky, responsive       | ✅         |
| Header         | Proper heading                  | ✅ Proper font size & layout      | ✅         |
| Character Card | Display character info properly | ✅ Clean design                   | ✅         |
| Modal          | Opens and closes properly       | ✅ Transitions smooth, accessible | ✅         |
| Footer         | Copyright and links             | ✅ Present and responsive         | ✅         |
