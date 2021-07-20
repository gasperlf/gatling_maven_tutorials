package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.ChainBuilder
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class LoadSimulationBasic extends Simulation {

  //http config
  val httpConfig = http.baseUrl("https://gorest.co.in/")
    //Fiddler or proxyman
    //.proxy(Proxy("localhost",8888))
    .header("Authorization", "4be9657f36530e35d7107f4f543386cefbd6180b32bcf7cf7ec02ff0d4fe21e2")
    .header("Accept", "application/json")
    .header("content-type", "application/json")

  val csvFeeder = csv("./src/test/resources/data/getUser_2.csv").circular

  def getAuser(): ChainBuilder = {
    repeat(1) {
      feed(csvFeeder)
        .exec(http("Get single user request")
          .get("/public/v1/users/${userid}")
          .check(status.in(200, 304))
          .check(jsonPath("$.data.name").is("${name}"))
        )
    }
  }

  //scenario config
  val scn = scenario("CSV Feeder test")
    .exec(getAuser())

  //execute scenario
  setUp(scn.inject(nothingFor(5),
    atOnceUsers(5),
    rampUsers(10) during (10 seconds))
  ).protocols(httpConfig)

}
