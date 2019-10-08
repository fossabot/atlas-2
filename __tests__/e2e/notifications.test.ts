import { Selector } from "testcafe"
import { ReactSelector, waitForReact } from "testcafe-react-selectors"
import store from "../../src/redux/store"
import { addNotification } from "../../src/redux/notifications/actions"
fixture(`Notifications`)
  .page("localhost:5000")
  .beforeEach(async () => {
    await waitForReact()
  })

test("can create a new notification", async t => {
  await t
    .expect(ReactSelector("Notification").withKey("0").exists)
    .notOk()
    .click(Selector("#dispatch"))
  // .expect(ReactSelector("Notification").exists)
  // .ok()
})

test("can delete an existing notification", async t => {
  await store.dispatch(addNotification("info", "Hello World"))
  // await t.expect(ReactSelector("Notification").exists).ok()
})
